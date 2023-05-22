import { getCurrentSession } from '@/lib/session'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import paralize from '@/public/assets/png/paralize-transparent.png'
import User from '@/components/dashboard/User'

export default async function Dashboard () {
  const session = await getCurrentSession()

  if (!session) {
    // redirect('/login')
  }

  return (
    <div
      className='relative flex flex-column items-start justify-start px-6 py-4
        h-full w-full md:px-24 md:py-12'
    >
      <div className='relative flex flex-row h-fit w-full justify-between items-center'>
        <Image src={paralize} height={40} width={40} alt='paralize' />
        <User session={session} />
      </div>
    </div>
  )
}
