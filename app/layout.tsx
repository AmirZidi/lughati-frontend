
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lughati',
  description: "Plateforme moderne pour l'apprentissage de l'arabe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="text-center text-sm py-6 border-t mt-10 text-zinc-500 dark:text-zinc-400">
          © 2025 Lughati. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}
