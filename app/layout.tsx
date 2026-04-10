import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoFix Bratislava — Profesionálny autoservis',
  description:
    'Profesionálny autoservis a pneuservis v Bratislave. Diagnostika, opravy, údržba. 15 rokov skúseností.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body
        style={{
          background: '#080d18',
          color: '#ffffff',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  )
}
