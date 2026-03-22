'use client';

import Link from 'next/link';
import React, { use } from 'react';
import {
  LayoutDashboard,
  CalendarDays,
  FilePlus2,
  BookOpen,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const menuList: { name: string; href: string; icon: React.ElementType }[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Leaves', href: '/leaves', icon: CalendarDays },
  { name: 'Apply leave', href: '/apply', icon: FilePlus2 },
  { name: 'Leave Policy', href: '/policy', icon: BookOpen },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='bg-primary-dark w-40 text-white'>
      <h2 className='mb-8 font-bold text-primary text-2xl'>Timeout</h2>
      <nav className='flex flex-col space-y-4 font-medium text-sm'>
        {menuList.map((menu) => {
          const Icon = menu.icon;
          const isActive = pathname === menu.href;
          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`flex flex-col items-center p-2 rounded gap-2 justify-center ${isActive ? ' bg-primary text-white' : ''}`}
            >
              <Icon size={20} className='sidebar-link-icon' />
              {menu.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
