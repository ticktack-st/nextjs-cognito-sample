# amplify-gen2-test

## メモ

### 入口

gen1かgen2でまったく使い方が異なるのに、最初の設定をミスるとただ動作しないので意味がわからなくなる
gen1、gen2はGUIでのアプリ作成時に選択するので間違えないように

### Amplify SANDBOXを使うために

AWSのクレデンシャルを設定します
`aws configure sso`を使用してアクセスできるようにしてください
確認コードはdockerからブラウザを開いてくれないので以下URLにアクセスして入れる
https://device.sso.ap-northeast-1.amazonaws.com/

認証できてもIP制限のため社内からしか使えません

**参考**
`npx ampx <コマンド>`はaws cliが打てれば動くはずです
https://docs.amplify.aws/react/start/account-setup/
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html#sso-configure-profile-token-auto-sso

### Amplifyで操作せずコンソールから行う必要があるもの

- Amplify自身に付与されたIAMロールの設定
- SecretManager/ParameterStoreの設定
- cognitoのユーザープール作成（複数ユーザープールが必要など特殊要件）
