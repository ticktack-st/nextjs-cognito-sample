// 'use client'

// import { useEffect, useState } from "react";

// import { Amplify } from "aws-amplify";
// import {
//   signInWithRedirect,
//   getCurrentUser,
//   fetchAuthSession,
//   signOut,
// } from "aws-amplify/auth";
// import { config } from "./amplifyConfigure.ts";

// Amplify.configure(config);

// function App() {
//   const [user, setUser] = useState<string>("");
//   const [session, setSession] = useState<string>("");
//   const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

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
//         <h1>Cognito User Pools sample with external IdP</h1>
//       </div>
//       <div>
//         <button onClick={() => signInWithRedirect()} disabled={isSignedIn}>
//           Open Managed Login
//         </button>
//         <button onClick={() => signOut()} disabled={!isSignedIn}>
//           Sign Out
//         </button>
//       </div>
//       <div>
//         <label>Signed In?：</label>
//         <span>{isSignedIn ? "TRUE" : "FALSE"}</span>
//       </div>
//       <div>
//         <pre>{user}</pre>
//         <pre>{session}</pre>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { Issuer, generators } from  'openid-client';
// const app = express();

const COGNITO_DOMAIN = 'https://ap-northeast-1fvgvh0wsz.auth.ap-northeast-1.amazoncognito.com';
const CLIENT_ID = '68gum8efm44fbnotgqvq3651jq';
const REDIRECT_URI = 'http://localhost:3000/loggedin';
const RESPONSE_TYPE = 'code';
const SCOPE = 'openid+email+profile';
const loginUrl = `${COGNITO_DOMAIN}/login?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&scope=${SCOPE}`;

export default function Page() {
  return (
    <>
      <h1>Hello, World!</h1>
      <div>トップページ</div>
      <a href={loginUrl}><button>Cognitoでログインする</button></a>
    </>
  )
}

// // 'use client'

// // import { useState } from 'react';
// // import { signIn } from '@/lib/cognito';

// // export default function Page() {
// //   const [username, setUsername] = useState<string>('kmorita@jmdc.co.jp');
// //   const [password, setPassword] = useState<string>('KeigoMorita1!');
// //   const [message, setMessage] = useState<string>('');

// //   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     try {
// //       const session = await signIn(username, password);
// //       setMessage('ログイン成功ですわ〜🌸');
// //       console.log('Access Token:', session.getAccessToken().getJwtToken());
// //       console.log('session: %o', session);
// //     } catch (error) {
// //       setMessage('ログインに失敗しましたの…😭');
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
// //       <h2>ログイン</h2>
// //       <form onSubmit={handleLogin}>
// //         <div>
// //           <label>ユーザー名：</label>
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>パスワード：</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">ログイン</button>
// //       </form>
// //       <p>{message}</p>
// //     </div>
// //   );
// // };
