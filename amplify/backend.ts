/**
 * ここでは、Amplifyのバックエンドリソースを定義します。
 * 例えば、API GatewayやDynamoDBなどのリソースを定義することができます。
 * 定義というのはデプロイ時に参照されるということです。
 * ここで呼び出されないものはデプロイされません。
 */

import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

defineBackend({
  data,
});
