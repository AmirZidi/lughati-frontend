'use client';

import { useEffect } from 'react';
import { configureAmplify } from '@/lib/amplify';

export const AmplifyInitClient = () => {
  useEffect(() => {
    configureAmplify();
  }, []);

  return null;
};
