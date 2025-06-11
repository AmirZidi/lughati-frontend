// lib/amplify.ts
import { Amplify } from 'aws-amplify';
import { cognitoConfig } from './cognito';

Amplify.configure({
  Auth: {
    region: cognitoConfig.region,
    userPoolId: cognitoConfig.userPoolId,
    userPoolWebClientId: cognitoConfig.userPoolClientId,
  },
});
