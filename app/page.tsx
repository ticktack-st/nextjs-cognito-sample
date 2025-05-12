// import { useEffect, useState } from "react";
// import { Amplify } from "aws-amplify";
// import {
//   signInWithRedirect,
//   signOut,
// } from "aws-amplify/auth";
// import {
//   configPoolA,
// } from "./configure"

export default function Page() {
  //   const [user, setUser] = useState<string>("");
  //   const [session, setSession] = useState<string>("");
  //   const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  //   function signInA() {
  //     Amplify.configure(configPoolA);
  //     signInWithRedirect();
  //   }

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const user = await getCurrentUser();
  //       const session = await fetchAuthSession();
  //       setUser(JSON.stringify(user, null, 2));
  //       setSession(JSON.stringify(session, null, 2));
  //       setIsSignedIn(true);
  //     } catch {
  //       setIsSignedIn(false);
  //     }
  //   };
  //   init();
  // }, [setUser, setSession, setIsSignedIn]);

  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-16">
        <h1 className="mt-10 text-3xl font-bold">提出サイトメニュー</h1>
      </div>
      <div className="m-10  flex justify-around flex-wrap">
        <div className="p-4 w-1/2">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-green-800 rounded-md hover:bg-green-600">
            <h2 className="title-font font-medium text-3xl text-white">データアップロード</h2>
            <p className="leading-relaxed text-white">データファイルをアップロードしてください</p>
          </div>
        </div>
        <div className="p-4 w-1/2">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-green-800 rounded-md hover:bg-green-600">
            <h2 className="title-font font-medium text-3xl text-white">🚧過去データダウンロード</h2>
            <p className="leading-relaxed text-white">過去のデータファイルをダウンロードできます</p>
          </div>
        </div>
        <div className="p-4 w-1/2">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-green-800 rounded-md hover:bg-green-600">
            <h2 className="title-font font-medium text-3xl text-white">🚧提出履歴確認</h2>
            <p className="leading-relaxed text-white">過去の提出履歴を確認できます</p>
          </div>
        </div>
        <div className="p-4 w-1/2">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-green-800 rounded-md hover:bg-green-600">
            <h2 className="title-font font-medium text-3xl text-white">🚧取得ツールダウンロード</h2>
            <p className="leading-relaxed text-white">取得ツールダウンロード画面へ</p>
          </div>
        </div>
      </div>
    </div>
  )
};
