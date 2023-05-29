// auth imports
import getSession from '../auth/getSession'
import AuthProvider from './AuthContext'
import { headers } from 'next/headers'

import './globals.css'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

export const metadata = {
  title: 'Paralize',
  description: 'This is a demo of Next.js 13 parallel routes'
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getSession(headers().get('cookie') ?? '')

  return (
    <html lang='en'>
      <body className={sora.className}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  )
}
