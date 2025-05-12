'use client';
import { Amplify } from 'aws-amplify';
import React, { useState } from 'react';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { Button } from "@/components/ui/button"
import {
  configPoolA,
} from "../configure"

Amplify.configure(configPoolA);

export default function Page() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16">
          <h1 className="mt-10 text-3xl font-bold">ファイルアップロード</h1>
        </div>
        <div className="m-10  flex justify-around flex-wrap">
          <div className="p-4 w-1/2">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-green-800 rounded-md hover:bg-green-600">
              <FileUploader />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FileUploader() {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    if (!file) return;

    const s3Client = new S3Client({
      region: 'ap-northeast-1',
      credentials: undefined,
    });

    try {
      const command = new PutObjectCommand({
        Bucket: 'amplify-file-upload-test-bucket-ticktack',
        Key: `${file.name}`,
        Body: file,
        ContentType: file.type,
      });

      const response = await s3Client.send(command);
      console.log('Upload succeeded:', response);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}


// function FileUploader() {
//   const [file, setFile] = useState<File | null>(null);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFile(event.target.files?.[0] || null);
//   };

//   const handleUpload = async () => {
//     console.log('Uploading file:', file);
//     if (!file) return;
//     console.log('check');
//     try {
//       const result = await uploadData({
//         path: `amplify-file-upload-test-bucket-ticktack/${file.name}`,
//         data: file,
//         options: {
//           contentType: file.type,
//           onProgress: ({ transferredBytes, totalBytes }) => {
//             if (totalBytes) {
//               console.log(
//                 `Upload progress: ${Math.round(
//                   (transferredBytes / totalBytes) * 100
//                 )}%`
//               );
//             }
//           },
//         },
//       }).result;
//       console.log('Upload succeeded:', result);
//     } catch (error) {
//       console.error('Upload failed:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleChange} />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   );
// };




// async function uploadFile(file) {
//   try {
//     const result = await Storage.put(file.name, file, {
//       contentType: file.type,
//     });
//     console.log('ファイルのアップロードに成功しました:', result);
//   } catch (error) {
//     console.error('ファイルのアップロードに失敗しました:', error);
//   }
// }

//   return (

//   )
