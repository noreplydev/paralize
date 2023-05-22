'use client'

import Image from 'next/image'
import github from '@/public/assets/png/github-white.png'
import arrow from '@/public/assets/png/arrow-expand.png'
import { useEffect, useRef, useState } from 'react'

const UserModal = ({showModal, setShowModal}) => {
  const modalRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false)
      } else {
        setShowModal(true)
      }
    }
    
    // Bind the event listener
    if (showModal) document.addEventListener("mousedown", handleClickOutside)

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [modalRef])

  return (
    <>
      {
        showModal && (
          <div
            ref={modalRef}
            className='absolute top-0 right-0 w-48 h-48 bg-white rounded-lg shadow-lg'
          >
            hola
          </div> 
        )
      } 
    </>
  )
}

export default function User({session}) {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div
      onClick={() => setShowModal(true)}
      className='relative flex flex-row justify-center items-center h-fit w-fit gap-x-3
      px-3 py-2 rounded-lg hover:bg-primary transition-all duration-75 ease-in-out cursor-pointer'
    >
      <Image
        className='rounded-full'
        src={session?.user?.image ?? github}
        height={30}
        width={30}
        alt='user image'
      />
      <p className='text-white font-normal text-md'>
        {session?.user?.name ?? 'User'}
      </p>
      <Image src={arrow} height={12} width={7} alt='user image' />
      <UserModal showModal={showModal} setShowModal={(value) => setShowModal(value)}/>
    </div>
  )
}