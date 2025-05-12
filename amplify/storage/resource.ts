import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplify-file-upload-test-bucket-ticktack',
  access: (allow) => ({
    'files/*': [
      allow.guest.to(['read', 'write']),
    ],
  })
});