'use client'

import Image from 'next/image'
import github from '@/public/assets/png/github-white.png'
import arrow from '@/public/assets/png/arrow-expand.png'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import { Session } from '@/types/Session'

// Icons
import user from '@/public/assets/svg/user.svg'
import card from '@/public/assets/svg/credit-card.svg'
import create from '@/public/assets/svg/create.svg'
import logout from '@/public/assets/svg/logout.svg'

const options = [
  {
    name: 'Account settings',
    icon: user,
    action: () => {}
  },
  {
    name: 'Billing details',
    icon: card,
    action: () => {}
  },
  {
    name: 'Create project',
    icon: create,
    action: () => {}
  },
  {
    name: 'Logout',
    icon: logout,
    action: () => signOut()
  }
]

const UserModal = () => {
  return (
    <div
      id='modal'
      className='absolute top-16 right-0 w-fit h-fit bg-primary 
        rounded-lg shadow-lg px-3 py-3.5 cursor-pointer z-10
        border-solid border-[1px] border-secondary'
    >
      {options.map((option, key) => {
        return (
          <div
            key={key}
            className='relative flex flex-row h-fit w-full px-4 py-2 
              hover:bg-secondary cursor-pointer rounded-md transition-all duration-90 
              ease-in-out gap-3'
          >
            <Image
              src={option.icon}
              height={20}
              width={20}
              alt='Logout image'
            />
            {option.name !== 'Logout' ? (
              <p
                key={key}
                className={`text-[#c3c3c3]`}
                onClick={() => signOut()}
              >
                {option.name}
              </p>
            ) : (
              <p
                key={key}
                className={`text-[#DE3939]`}
                onClick={() => signOut()}
              >
                {option.name}
              </p>
            )}
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
    </>
  )
}
