'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { setAccessToken } from '@/lib/token';
import api from '@/services/api';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    api
      .post('/auth/refresh')
      .then((res) => {
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        router.push('/login');
      });
  }, [router]);
  return <div>{children}</div>;
};

export default AuthGuard;
