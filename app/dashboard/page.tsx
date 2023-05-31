import { getCurrentSession } from '@/lib/session'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Session } from '@/types/Session'

import paralize from '@/public/assets/png/paralize-transparent.png'
import UserPin from '@/components/dashboard/UserPin'
import Projects from '@/components/dashboard/Projects'

export default async function Dashboard ({
  searchParams
}: {
  searchParams: any
}) {
  const session = await getCurrentSession()

  if (!session) {
    // redirect('/login')
  }

  return (
    <div
      className='relative flex flex-col items-start justify-start px-6 py-4
        h-screen w-full md:px-24 md:py-12'
    >
      <div
        className='relative flex flex-row h-fit w-full justify-between 
        items-center'
      >
        <Image src={paralize} height={40} width={40} alt='paralize' />
        <UserPin session={session} />
      </div>
      <div
        className='relative flex flex-col h-full w-full 
        pt-10 text-3xl font-medium'
      >
        <h1 className='text-white '>Projects</h1>
        <Projects searchParams={searchParams} />
      </div>
    </div>
  )
}
