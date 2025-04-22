'use client'

import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import {
  signInWithRedirect,
  getCurrentUser,
  fetchAuthSession,
  signOut,
} from "aws-amplify/auth";
import {
  configPoolA,
  configPoolB,
} from "./configure"

export default function Page() {
  const [user, setUser] = useState<string>("");
  const [session, setSession] = useState<string>("");
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  function signInA() {
    Amplify.configure(configPoolA);
    signInWithRedirect();
  }

  function signInB() {
    Amplify.configure(configPoolB);
    signInWithRedirect();
  }

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
        <button onClick={signInA} disabled={isSignedIn}>
          ユーザープール1でログイン
        </button>
        <br />
        <button onClick={signInB} disabled={isSignedIn}>
          ユーザープール2でログイン
        </button>
        <button onClick={() => signOut()} disabled={!isSignedIn}>
          サインアウト
        </button>
      </div>
      <div>
        <label>サインイン状況：</label>
        <span>{isSignedIn ? "TRUE" : "FALSE"}</span>
      </div>
      <div>
        <pre>{user}</pre>
        <pre>{session}</pre>
      </div>
    </div>
  );
}
