'use client';
import { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { cognitoConfig } from '@/lib/cognito';

export const AmplifyProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Amplify.configure({
      Auth: {
        region: cognitoConfig.region,
        userPoolId: cognitoConfig.userPoolId,
        userPoolWebClientId: cognitoConfig.userPoolClientId,
      },
    });
  }, []);

  return <>{children}</>;
};

