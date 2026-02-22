import AuthGuard from '@/components/auth/AuthGuard';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <div>
        <div className='flex min-h-screen'>
          <Sidebar />

          <div className='flex flex-col flex-1'>
            <Topbar />
            <main className='p-6'>{children}</main>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default DashboardLayout;
