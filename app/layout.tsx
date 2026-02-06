import './globals.css'

export const metadata = {
  title: 'ClawGuru – OpenClaw Mission Control & Security 2026',
  description: 'Live-Lagezentrum für OpenClaw/Moltbot Security, Betrieb & Kosten.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header className="border-b border-gray-800 p-4 flex justify-between">
          <strong>ClawGuru</strong>
          <nav className="flex gap-4 text-sm">
            <a href="/mission-control">Mission Control</a>
            <a href="/security">Security</a>
            <a href="/tools">Tools</a>
            <a href="/openclaw-security-2026">Lagebericht</a>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto p-6">{children}</main>
        <footer className="border-t border-gray-800 p-6 text-sm text-gray-400">
          © 2026 ClawGuru · OpenClaw Operations Intelligence
        </footer>
      </body>
    </html>
  )
}
