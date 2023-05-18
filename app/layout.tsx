import './globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js 13 parallel routes',
  description: 'This is a demo of Next.js 13 parallel routes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  )
}
