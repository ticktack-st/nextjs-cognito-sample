import { defineFunction } from '@aws-amplify/backend';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from "aws-cdk-lib/aws-lambda";
// import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Duration } from 'aws-cdk-lib';
import * as path from 'path';
// import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';

export const prismaMigrateHandler = defineFunction((scope) => {

  return new NodejsFunction(scope, 'prismaMigrate', {
    entry: path.join(__dirname, 'handler.ts'),
    runtime: Runtime.NODEJS_22_X,
    timeout: Duration.seconds(20),
    memorySize: 128,
    // vpc,
    // vpcSubnets: privateSubnets,
    // securityGroups: [lambdaSecurityGroup],
    environment: {
      PRISMA_QUERY_ENGINE_LIBRARY: "./libquery_engine-rhel-openssl-3.0.x.so.node"
    },
    bundling: {
      nodeModules: ["prisma", "@prisma/client"],
      commandHooks: {
        beforeInstall: (i, o) => [],
        beforeBundling: (i, o) => [],
        afterBundling(inputDir: string, outputDir: string): string[] {
          return [
            `cp ${inputDir}/node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node ${outputDir}`,
            `cp ${inputDir}/prisma/schema.prisma ${outputDir}`,
            "npx prisma generate",
          ];
        },
      },
      forceDockerBundling: false,
    },
  });
});