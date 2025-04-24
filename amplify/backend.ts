import { defineBackend } from '@aws-amplify/backend';
// import { auth } from './auth/resource.js';
import { data } from './data/resource';



defineBackend({
  // auth,
  data,
});
