import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RetroFlow — Weekly Business Health, Automated',
  description: 'Every Monday at 8 AM, RetroFlow reads your Google Sheets metrics and posts a colour-coded business health digest to Slack. No dashboards. No manual reports. Just the numbers that matter, waiting in your team channel.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
