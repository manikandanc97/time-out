import Link from 'next/link';
import React from 'react';

const menuList = [
  { name: 'Dashboard', href: '/' },
  { name: 'My Leaves', href: '/leaves' },
  { name: 'Apply leave', href: '/apply' },
  { name: 'Leave Policy', href: '/policy' },
];

const Sidebar = () => {
  return (
    <aside className='bg-primary-dark p-4 w-64 text-white'>
      <h2 className='mb-8 font-bold text-primary text-2xl'>Timeout</h2>
      <nav className='flex flex-col space-y-4 font-medium text-sm'>
        {menuList.map((menu) => (
          <Link key={menu.name} href={menu.href}>
            {menu.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
