'use client'

import Image from 'next/image'
import github from '@/public/assets/png/github-white.png'
import arrow from '@/public/assets/png/arrow-expand.png'
import { useEffect, useRef, useState } from 'react'

const UserModal = () => {
  return (
    <div
      id='modal'
      className='absolute top-16 right-0 w-48 h-fit bg-primary rounded-lg shadow-lg'
    >
      hola
    </div> 
  )
}

export default function User({session}) {
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.id === 'modal') return
      setShowModal(false)
    }
    
    if (showModal) {
      // Bind the event listener
      document.addEventListener("click", handleClickOutside);
    }
    
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    }
  }, [showModal])
  
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className='relative flex flex-row justify-center items-center h-fit w-fit gap-x-3
        px-4 py-3 rounded-lg hover:bg-primary transition-all duration-75 ease-in-out cursor-pointer'
      >
        <Image
          className='rounded-full'
          src={session?.user?.image ?? github}
          height={28}
          width={28}
          alt='user image'
        />
        <p className='text-white font-normal text-md'>
          {session?.user?.name ?? 'User'}
        </p>
        <Image src={arrow} height={12} width={7} alt='user image' />
      </div>
      {
        showModal && <UserModal />
      }
    </>
  )
}