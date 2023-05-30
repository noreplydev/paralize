'use client'

import Image from 'next/image'
import github from '@/public/assets/png/github-white.png'
import arrow from '@/public/assets/png/arrow-expand.png'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import { Session } from '@/types/Session'

const options = [
  { name: 'Logout', action: () => signOut() },
  { name: 'Create project', action: () => {} }
]

const UserModal = () => {
  return (
    <div
      id='modal'
      className='absolute top-16 right-0 w-fit h-fit bg-primary 
        rounded-lg shadow-lg px-2 py-2 cursor-pointer z-10
        border-solid border-[1px] border-secondary'
    >
      {options.map((option, key) => {
        return (
          <p
            key={key}
            className='text-white px-4 py-2 hover:bg-secondary 
              cursor-pointer rounded-md transition-all 
              duration-90 ease-in-out'
            onClick={() => signOut()}
          >
            {option.name}
          </p>
        )
      })}
    </div>
  )
}

export default function UserPin ({ session }: { session: Session }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    function handleClickOutside (event) {
      if (event?.target?.id === 'modal') return
      setShowModal(false)
    }

    if (showModal) {
      // Bind the event listener
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showModal])

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className='relative flex flex-row justify-center items-center h-fit w-fit 
          gap-x-3 px-4 py-3 rounded-lg hover:bg-primary transition-all 
          duration-75 ease-in-out cursor-pointer border-solid 
          border-[1px] border-background hover:border-secondary'
      >
        <Image
          className='rounded-full'
          src={session.user.image ?? github}
          height={28}
          width={28}
          alt='user image'
        />
        <p className='text-white font-normal text-md select-none'>
          {session.user.name ?? 'User'}
        </p>
        <Image src={arrow} height={12} width={7} alt='user image' />
      </div>
      {showModal && <UserModal />}
    </>
  )
}
