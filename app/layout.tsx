import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';

export const metadata = {
  title: 'Lughati',
  description: 'Multilingual app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
        <Header />
        <main className="flex-grow container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
