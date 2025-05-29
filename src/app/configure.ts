import type { ResourcesConfig } from 'aws-amplify'

export const configPoolA: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: '',
      userPoolClientId: '',
      // identityPoolId: "",
      // signUpVerificationMethod: "code",
      // userAttributes: {
      //   email: {
      //     required: true,
      //   },
      // },
      // allowGuestAccess: true,
      loginWith: {
        oauth: {
          domain: '<YOUR_DOMAIN>.auth.ap-northeast-1.amazoncognito.com',
          scopes: ['email', 'openid'],
          redirectSignIn: ['http://localhost:3000/logged-in'],
          redirectSignOut: ['http://localhost:3000'],
          responseType: 'code',
        },
      },
    },
  },
}

export const configPoolB: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: '<YOUR_USER_POOL_ID>',
      userPoolClientId: '<YOUR_USER_POOL_CLIENT_ID>',
      loginWith: {
        oauth: {
          domain: '<YOUR_DOMAIN>.auth.ap-northeast-1.amazoncognito.com',
          scopes: ['openid'],
          redirectSignIn: ['http://localhost:3000'],
          redirectSignOut: ['http://localhost:3000'],
          responseType: 'code',
        },
      },
    },
  },
}
