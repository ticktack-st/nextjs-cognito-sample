import type { Handler, Context } from 'aws-lambda';

export const handler: Handler = async (event: any, context: Context) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // ★これが CORS 対策の要ですわ
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "OPTIONS,GET,POST", // 必要に応じて調整
    },
    body: JSON.stringify({
      message: "こんにちは、CORS 設定済みですわよ🌸",
    }),
  };
};