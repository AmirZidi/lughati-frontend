// app/components/Header.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
import { Auth } from 'aws-amplify';

export default function Header() {
  const [user, setUser] = useState<any | null>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((u) => setUser(u))
      .catch(() => setUser(null));
  }, []);

  if (user === undefined) {
    return (
      <header className="flex items-center px-6 py-4 border-b bg-gray-50 dark:bg-gray-800">
        <div className="flex-1 text-lg">Loading…</div>
      </header>
    );
  }

  const isInstructor = user?.attributes['custom:role'] === 'instructor';

  return (
    <header className="flex items-center px-6 py-4 border-b bg-gray-50 dark:bg-gray-800">
      <Link href="/" className="text-2xl font-bold mr-8">
        Lughati
      </Link>

      <nav className="flex items-center space-x-4 flex-1">
        {!user && (
          <>
            <Link href="/login" className="text-sm font-medium hover:underline">
              Login
            </Link>
            <Link href="/signup" className="text-sm font-medium hover:underline">
              Sign Up
            </Link>
          </>
        )}

        {user && (
          <>
            <Link href="/courses" className="text-sm font-medium hover:underline">
              {pathname.startsWith('/inscription') ? 'Explorer les cours' : 'Explore Courses'}
            </Link>
            {isInstructor && (
              <Link href="/courses/create" className="text-sm font-medium hover:underline">
                {pathname.startsWith('/inscription') ? 'Créer un cours' : 'Create Course'}
              </Link>
            )}
            <Link href="/profile" className="text-sm font-medium hover:underline">
              Profile
            </Link>
          </>
        )}
      </nav>

      {/* Dark / Light toggle */}
      <button
        className="ml-4 px-3 py-1 border rounded text-sm"
        onClick={() => document.documentElement.classList.toggle('dark')}
      >
        {document.documentElement.classList.contains('dark') ? '🌞' : '🌙'}
      </button>

      {/* Language switch */}
      <LanguageToggle />
    </header>
  );
}
