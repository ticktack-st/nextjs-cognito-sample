/**
 * ここでは、Amplifyのバックエンドリソースを定義します。
 * 例えば、API GatewayやDynamoDBなどのリソースを定義することができます。
 * 定義というのはデプロイ時に参照されるということです。
 * ここで呼び出されないものはデプロイされません。
 */

import { defineBackend } from '@aws-amplify/backend';
import { Stack } from "aws-cdk-lib";
import { Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { data } from './data/resource';
import { defineRds } from './custom/rds/resource';
import { dbMigration } from './functions/dbMigration/resource';
import { prismaMigrate } from './functions/prismaMigrate/src/resource';
import {
  AuthorizationType,
  Cors,
  LambdaIntegration,
  RestApi,
} from "aws-cdk-lib/aws-apigateway";

const backend = defineBackend({
  data,
  dbMigration,
  prismaMigrate
});

const rds = defineRds({
  stack: backend.createStack('RDSStack'),
});

// create a new API stack
const apiStack = backend.createStack("api-stack");
// create a new REST API
const myRestApi = new RestApi(apiStack, "RestApi", {
  restApiName: "myRestApi",
  deploy: true,
  deployOptions: {
    stageName: "dev",
  },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS, // Restrict this to domains you trust
    allowMethods: Cors.ALL_METHODS, // Specify only the methods you need to allow
    allowHeaders: Cors.DEFAULT_HEADERS, // Specify only the headers you need to allow
  },
});
// create a new Lambda integration
const lambdaIntegration = new LambdaIntegration(
  backend.dbMigration.resources.lambda
);
// create a new resource path with IAM authorization
const itemsPath = myRestApi.root.addResource("items", {
  defaultMethodOptions: {
    authorizationType: AuthorizationType.IAM,
  },
});
itemsPath.addMethod("GET", lambdaIntegration);
// add a proxy resource path to the API
itemsPath.addProxy({
  anyMethod: true,
  defaultIntegration: lambdaIntegration,
});

// create a new IAM policy to allow Invoke access to the API
const apiRestPolicy = new Policy(apiStack, "RestApiPolicy", {
  statements: [
    new PolicyStatement({
      actions: ["execute-api:Invoke"],
      resources: [
        `${myRestApi.arnForExecuteApi("*", "/items", "dev")}`,
        `${myRestApi.arnForExecuteApi("*", "/items/*", "dev")}`,
      ],
    }),
  ],
});

+ backend.addOutput({
  custom: {
    helloWorldFunctionName: backend.dbMigration.resources.lambda.functionName,
    API: {
      [myRestApi.restApiName]: {
        endpoint: myRestApi.url,
        region: Stack.of(myRestApi).region,
        apiName: myRestApi.restApiName,
      },
    },
  },
});
