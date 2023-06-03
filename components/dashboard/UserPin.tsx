'use client'

import Image from 'next/image'
import github from '@/public/assets/png/github-white.png'
import arrow from '@/public/assets/png/arrow-expand.png'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import { Session } from '@/types/Session'
import { ModalOptions } from '@/lib/UserModalOptions'

const UserModal = () => {
  return (
    <div
      id='modal'
      className='absolute top-16 right-0 w-fit h-fit bg-primary 
        rounded-lg px-3 py-3.5 z-10 flex flex-col justify-start items-center
        border-solid border-[1px] border-secondary'
    >
      {ModalOptions.map((option, key) => {
        const color =
          option.name !== 'Logout' ? 'text-[#c3c3c3]' : 'text-[#DE3939]'

        return (
          <div
            key={key}
            className='relative flex flex-row justify-start items-center h-fit w-full px-4 py-2 
              hover:bg-secondary cursor-pointer rounded-md transition-all duration-90 
              ease-in-out gap-3'
          >
            <div className='relative h-fit w-5 aspect-square'>
              <Image src={option.icon} fill={true} alt='Logout image' />
            </div>
            <p
              key={key}
              className={`${color} font-light whitespace-nowrap text-base select-none`}
              onClick={() => signOut()}
            >
              {option.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default function UserPin ({ session }: { session: Session }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    function handleClickOutside (event: React.MouseEvent<HTMLElement>) {
      const target = event.target as HTMLElement
      if (target.id === 'modal') return
      setShowModal(false)
    }

    if (showModal) {
      // Bind the event listener
      document.addEventListener('click', handleClickOutside as any)
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside as any)
    }
  }, [showModal])

  return (
    <div
      className='relative h-fit w-fit flex flex-col justify-start items-start
      '
    >
      <div
        onClick={() => setShowModal(true)}
        className='relative flex flex-row justify-center items-center h-fit w-fit 
          gap-x-3 px-4 py-3 rounded-lg hover:bg-primary transition-all 
          duration-75 ease-in-out cursor-pointer border-solid 
          border-[1px] border-background hover:border-secondary'
      >
        <Image
          className='rounded-full'
          src={session?.user?.image ?? github}
          height={28}
          width={28}
          alt='user image'
        />
        <p className='text-white font-normal text-base select-none'>
          {session?.user?.name ?? 'User'}
        </p>
        <Image src={arrow} height={12} width={7} alt='user image' />
      </div>
      {showModal && <UserModal />}
    </div>
  )
}
