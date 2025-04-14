// import { ResourcesConfig } from "aws-amplify";

// const COGNITO_REGION = "ap-northeast-1";
// const COGNITO_USER_POOL = "ap-northeast-1_fVGVH0WsZ";
// const COGNITO_USER_POOL_CLIENT = "68gum8efm44fbnotgqvq3651jq";

// const COGNITO_DOMAIN_PREFIX = "https://ap-northeast-1fvgvh0wsz";

// export const config: ResourcesConfig = {
//   Auth: {
//     Cognito: {
//       userPoolId: COGNITO_USER_POOL,
//       userPoolClientId: COGNITO_USER_POOL_CLIENT,
//       loginWith: {
//         oauth: {
//           domain: `https://ap-northeast-1fvgvh0wsz.auth.ap-northeast-1.amazoncognito.com`,
//           scopes: ["openid"],
//           redirectSignIn: ["http://localhost:3000"],
//           redirectSignOut: ["http://localhost:3000"],
//           responseType: "code",
//         },
//       },
//     },
//   },
// };