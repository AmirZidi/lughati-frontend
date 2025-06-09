import '../styles/globals.css'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: 'Lughati',
  description: 'Plateforme complète d’apprentissage de l’arabe',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-[80vh]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
