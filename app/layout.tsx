// auth imports
import getSession from '../auth/getSession'
import { headers } from 'next/headers'

import './globals.css'
import { Sora } from 'next/font/google'
import Image from 'next/image'
import UserPin from '@/components/dashboard/UserPin'
import paralize from '@/public/assets/png/paralize-transparent.png'
import { Session } from '@/types/Session'
import Link from 'next/link'

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
  const session = (await getSession(headers().get('cookie') ?? '')) as Session

  return (
    <html lang='en'>
      <body
        className={`${sora.className} relative flex flex-col h-screen w-screen`}
      >
        <div
          className='relative flex flex-row h-fit w-full justify-between 
          items-center px-6 py-4 md:px-24 md:py-12 mb-[-120px] z-[9999999999999999]'
        >
          <Link href='/'>
            <Image src={paralize} height={40} width={40} alt='paralize' />
          </Link>
          <UserPin session={session} />
        </div>
        {children}
      </body>
    </html>
  )
}
