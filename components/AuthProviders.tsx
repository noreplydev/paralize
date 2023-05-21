'use client'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

import github from '/public/assets/png/github-white.png'
import google from '/public/assets/png/google.png'

export const Github = ({ type }: { type: String }) => {
  return (
    <div
      onClick={() => {
        if (type === 'signIn') {
          signIn('github', {
            callbackUrl: `${window.location.origin}/dashboard`
          }) // This is the magic. Provided by next-auth

          return
        }

        signOut()
      }}
      className='relative flex flex-row justify-center items-center h-fit w-full bg-[#191919] 
        rounded-lg py-3 px-10 gap-x-2 cursor-pointer'
    >
      <div className='relative h-full w-fit aspect-square'>
        <Image src={github} fill={true} alt='Paralize logo image' />
      </div>
      <p className='whitespace-nowrap font-normal text-sm text-white'>
        continue with Github
      </p>
    </div>
  )
}

export const Google = () => {
  return (
    <div
      className='relative flex flex-row justify-center items-center h-fit w-full bg-white rounded-lg py-3 
      px-6 gap-x-2 cursor-pointer'
    >
      <div className='relative h-full w-fit aspect-square'>
        <Image src={google} fill={true} alt='Paralize logo image' />
      </div>
      <p className='whitespace-nowrap font-normal text-sm'>
        continue with Google
      </p>
    </div>
  )
}
