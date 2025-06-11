'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageToggle() {
  const pathname = usePathname();
  const mapping: Record<string, string> = {
    '/inscription': '/signup',
    '/connexion': '/login',
    '/confirmation': '/confirm',
    '/signup': '/inscription',
    '/login': '/connexion',
    '/confirm': '/confirmation',
  };
  const target = mapping[pathname] || '/';
  const isFrench = pathname.startsWith('/inscription') || pathname.startsWith('/connexion') || pathname.startsWith('/confirmation');
  const label = isFrench ? 'EN' : 'FR';
  return (
    <Link href={target} className="ml-auto p-2 text-sm font-medium">
      {label}
    </Link>
  );
}
