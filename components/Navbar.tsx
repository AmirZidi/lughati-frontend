'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition ${scrolled ? 'bg-white/90 backdrop-blur border-b border-gray-200' : 'bg-white dark:bg-zinc-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">🌍 Lughati</Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-500">Accueil</Link>
          <Link href="/catalogue" className="hover:text-blue-500">Catalogue</Link>
          <Link href="/instructeur" className="hover:text-blue-500">Instructeurs</Link>
          <Link href="/login" className="hover:text-blue-500">Connexion</Link>
        </nav>
      </div>
    </header>
  );
}
