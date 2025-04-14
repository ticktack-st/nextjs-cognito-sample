'use client'

import { useEffect, useState } from "react";

import { Amplify } from "aws-amplify";
import {
  signInWithRedirect,
  getCurrentUser,
  fetchAuthSession,
  signOut,
} from "aws-amplify/auth";
import outputs from "../amplify_outputs.json"

// const COGNITO_DOMAIN = 'https://ap-northeast-1fvgvh0wsz.auth.ap-northeast-1.amazoncognito.com';
// const CLIENT_ID = '68gum8efm44fbnotgqvq3651jq';
// const REDIRECT_URI = 'http://localhost:3000/loggedin';
// const RESPONSE_TYPE = 'code';
// const SCOPE = 'openid+email+profile';
// const loginUrl = `${COGNITO_DOMAIN}/login?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
//   REDIRECT_URI
// )}&scope=${SCOPE}`;

Amplify.configure(outputs);

export default function Page() {
  const [user, setUser] = useState<string>("");
  const [session, setSession] = useState<string>("");
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      try {
        const user = await getCurrentUser();
        const session = await fetchAuthSession();
        setUser(JSON.stringify(user, null, 2));
        setSession(JSON.stringify(session, null, 2));
        setIsSignedIn(true);
      } catch {
        setIsSignedIn(false);
      }
    };
    init();
  }, [setUser, setSession, setIsSignedIn]);

  return (
    <div>
      <div>
        <h1>Cognito User Pools sample with external IdP</h1>
      </div>
      <div>
        <button onClick={() => signInWithRedirect()} disabled={isSignedIn}>
          Open Managed Login
        </button>
        <button onClick={() => signOut()} disabled={!isSignedIn}>
          Sign Out
        </button>
      </div>
      <div>
        <label>Signed In?：</label>
        <span>{isSignedIn ? "TRUE" : "FALSE"}</span>
      </div>
      <div>
        <pre>{user}</pre>
        <pre>{session}</pre>
      </div>
    </div>
  );
}
