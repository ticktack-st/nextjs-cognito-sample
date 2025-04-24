// import { defineFunction } from '@aws-amplify/backend-function';
// import mysql from 'mysql2/promise';

// // export const handler = defineFunction({
// //   runtime: 'nodejs18.x',
// //   entry: './main.ts',
// // });

// export const handler = async () => {
//   const connection = await mysql.createConnection({
//     host: 'mytest.cpw6giymm07z.ap-northeast-1.rds.amazonaws.com',
//     port: 3306,
//     user: 'root',
//     password: 'passwordPassword0422',
//     database: 'test',
//     // host: process.env.MYSQL_HOST,
//     // port: 3306,
//     // user: process.env.MYSQL_USER,
//     // password: process.env.MYSQL_PASSWORD,
//     // database: process.env.MYSQL_DB,
//   });
//   import { defineBackend } from '@aws-amplify/backend';
//   import { defineFunction } from '@aws-amplify/backend-function';

//   export const backend = defineBackend({
//     mysqlFunction: defineFunction({
//       entry: './function/mysqlFunction/main.ts',
//       runtime: 'nodejs18.x',
//       environment: {
//         MYSQL_HOST: process.env.MYSQL_HOST!,
//         MYSQL_USER: process.env.MYSQL_USER!,
//         MYSQL_PASSWORD: process.env.MYSQL_PASSWORD!,
//         MYSQL_DB: process.env.MYSQL_DB!,
//       },
//       vpc: true, // RDSがVPC内にある場合
//     }),
//   });

//   const [rows] = await connection.execute('SELECT * FROM test');
//   await connection.end();

//   return {
//     statusCode: 200,
//     body: JSON.stringify(rows),
//   };
// };
// import { FunctionHandler } from 'aws-amplify/functions';

// export const handler: FunctionHandler = async (event) => {
//   return {
//     statusCode: 200,
//     body: 'Hello from Lambda!',
//   };
// };
