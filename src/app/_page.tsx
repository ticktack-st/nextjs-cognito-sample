/* eslint no-unused-vars: 0 */

// 'use client'

// import { Button } from "@/components/ui/button"
// import { useEffect, useState } from "react";
// import { Amplify } from "aws-amplify";
// import {
//   signInWithRedirect,
//   getCurrentUser,
//   fetchAuthSession,
//   signOut,
// } from "aws-amplify/auth";
// import {
//   configPoolA,
//   // configPoolB,
// } from "./configure"

// export default function Page() {
//   const [user, setUser] = useState<string>("");
//   const [session, setSession] = useState<string>("");
//   const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

//   function signInA() {
//     Amplify.configure(configPoolA);
//     signInWithRedirect();
//   }

//   // function signInB() {
//   //   Amplify.configure(configPoolB);
//   //   signInWithRedirect();
//   // }

//   async function callLambda() {
//     // const response = await client.get("/amplify/function/dbMigration/helloWorld");
//     // const data = await response.json();
//     // console.log(data.message);
//     //   const { credentials } = await fetchAuthSession();
//     //   console.log(credentials);
//     //   const lambda = new LambdaClient({ credentials: credentials, region: awsRegion });
//     //   const command = new InvokeCommand({
//     //     FunctionName: functionName,
//     //   });
//     //   const apiResponse = await lambda.send(command);
//     //   if (apiResponse.Payload) {
//     //     const payload = JSON.parse(new TextDecoder().decode(apiResponse.Payload));
//     //     // setText(payload.message)
//     //     return payload;
//     //   }
//     // } catch (error) {
//     //   console.error("Error calling Lambda function:", error);
//     //   throw error;
//     // }
//     // const res = await fetch(`${outputs.custom.API.myRestApi.endpoint}${functionName}`);
//     const res = await fetch(`https://0wuuh8wpjc.execute-api.ap-northeast-1.amazonaws.com/dev/items`);
//     console.log('%o', res);
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await res.json();
//     console.log(data);
//     return data;
//   }

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const user = await getCurrentUser();
//         const session = await fetchAuthSession();
//         setUser(JSON.stringify(user, null, 2));
//         setSession(JSON.stringify(session, null, 2));
//         setIsSignedIn(true);
//       } catch {
//         setIsSignedIn(false);
//       }
//     };
//     init();
//   }, [setUser, setSession, setIsSignedIn]);

//   return (
//     <div>
//       <div>
//         <h1>複数ユーザープールのログイン確認ページ</h1>
//         <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
//       </div>
//       <div>
//         <button onClick={signInA} disabled={isSignedIn}>
//           ユーザープール1でログイン
//         </button>
//         <br />
//         <button onClick={signInB} disabled={isSignedIn}>
//           ユーザープール2でログイン
//         </button>
//         <button onClick={() => signOut()} disabled={!isSignedIn}>
//           サインアウト
//         </button>
//       </div>
//       <div>
//         <label>サインイン状況：</label>
//         <span>{isSignedIn ? "TRUE" : "FALSE"}</span>
//       </div>
//       <div>
//         <pre>{user}</pre>
//         <pre>{session}</pre>
//       </div>
//       <div>
//         <h1>Amplify Lambda テスト</h1>
//         {/* <button onClick={callLambda}>呼び出す</button> */}
//         <button
//           onClick={async () => {
//             const result = await callLambda();
//             console.log(result);
//             alert(JSON.stringify(result, null, 2));
//           }}
//         >
//           呼び出す
//         </button>
//         <Button>Click me</Button>
//       </div>
//     </div>
//   );
// }
