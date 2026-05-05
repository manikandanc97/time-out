import { getOptionalUser } from '@/services/authService';
import { redirect } from 'next/navigation';
import React from 'react';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getOptionalUser();

  if (user) {
    redirect('/dashboard');
  }

  return <>{children}</>;
};

export default AuthLayout;
