import { defineFunction } from '@aws-amplify/backend';

export const prismaMigrate = defineFunction({
  name: 'prisma-migrate',
  entry: './handler.ts',
});
