'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/login');
  };

  if (pathname === '/login' || pathname === '/register') return null;

  return (
    <nav className='p-4 shadow-md bg-white text-black flex justify-between'>
      <div>SmartCare</div>
      <div>
        {isLoggedIn ? (
          <>
            <Link
              href='/dashboard'
              className='mr-4'
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className='text-red-600'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href='/login'
              className='mr-4'
            >
              Login
            </Link>
            <Link href='/register'>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}