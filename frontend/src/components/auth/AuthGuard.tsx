'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);
  return <div>{children}</div>;
};

export default AuthGuard;
