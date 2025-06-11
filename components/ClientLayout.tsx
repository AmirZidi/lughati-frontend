'use client'

import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-[80vh]">{children}</main>
    </ThemeProvider>
  )
}

