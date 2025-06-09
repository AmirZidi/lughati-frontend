'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-zinc-900">
      <div className="text-xl font-bold text-blue-600">Lughati</div>
      <div className="flex items-center gap-4 text-sm">
        <Link href="/">Accueil</Link>
        <Link href="/catalogue">Cours</Link>
        <Link href="/login">Connexion</Link>
        <Link href="/signup">Inscription</Link>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="light">☀️ Clair</option>
          <option value="dark">🌙 Sombre</option>
          <option value="system">🖥 Système</option>
        </select>
      </div>
    </nav>
  )
}
