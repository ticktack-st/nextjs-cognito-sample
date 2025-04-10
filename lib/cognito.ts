// import {
//     CognitoUserPool,
//     CognitoUser,
//     AuthenticationDetails,
//     CognitoUserSession,
// } from 'amazon-cognito-identity-js';

// const poolData = {
//     UserPoolId: 'ap-northeast-1_fVGVH0WsZ',
//     ClientId: '68gum8efm44fbnotgqvq3651jq',
// };
// const userPool = new CognitoUserPool(poolData);

// export function signIn(username: string, password: string): Promise<CognitoUserSession> {
//     const user = new CognitoUser({
//         Username: username,
//         Pool: userPool,
//     });

//     const authDetails = new AuthenticationDetails({
//         Username: username,
//         Password: password,
//     });

//     return new Promise((resolve, reject) => {
//         user.authenticateUser(authDetails, {
//             onSuccess: (session) => {
//                 resolve(session);
//             },
//             onFailure: (err) => {
//                 console.log("エラーしましたよ");
//                 reject(err);
//             },
//         });
//     });
// }
