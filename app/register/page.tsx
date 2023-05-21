import Image from 'next/image'
import Link from 'next/link'
import { Github, Google } from '@/components/AuthProviders'

import github from '/public/assets/png/github-white.png'

export default function Register () {
  const handleGithub = () => {
    window.location.href = 'http://localhost:3000/api/auth/github'
  }

  return (
    <main className='relative h-screen w-screen flex flex-col items-center justify-center'>
      <div
        className='relative flex flex-col items-center justify-start h-fit w-fit border-solid 
        border-[1px] border-[#efefef20] rounded-xl shadow-lg shadow-[#67676720] px-10 py-12 opacity-0 
        animate-scale-down'
      >
        <Image src={github} width={70} height={70} alt='Paralize logo image' />
        <h1 className='text-white font-normal mt-4 mb-1'>Sign up</h1>
        <p
          className='text-[#d9d9d9] font-light text-sm text-center pb-6 mb-6 border-b-[1px]
          border-[#efefef20]'
        >
          Already have an account?{' '}
          <span className='text-blue-500 hover:underline cursor-pointer'>
            <Link href='/login'>Sign in</Link>
          </span>
        </p>
        <div className='relative flex flex-col items-start justify-start gap-3'>
          <Google />
          <Github />
        </div>
      </div>
    </main>
  )
}
