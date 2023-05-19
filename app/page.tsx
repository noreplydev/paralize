import Image from 'next/image'
import Link from 'next/link'
import github from '/public/assets/png/github.png'

export default function Home () {
  return (
    <main
      className='h-screen w-screen bg-neutral-950 flex flex-col items-center justify-center
      bg-grid bg-cover bg-no-repeat bg-center will-change-contents'
    >
      <h1
        className='font-medium text-[#FFB23E] text-5xl mb-6 z-10 animate-scale-down
        opacity-0'
      >
        Paralize
      </h1>
      <h1
        className='font-light text-white text-2xl mb-10 z-10 text-center
        px-6 animate-scale-down-md opacity-0'
      >
        Create modern polls and analize the data
      </h1>
      <div className='absolute top-1/3 h-48 w-64 bg-[#ffb23e21] blur-3xl z-0'></div>
      <div className='flex flex-row gap-x-4 w-fit h-fit'>
        <Link
          href='https://github.com/noreplydev/paralize'
          target='_blank'
          className='relative flex flex-row  w-fit h-fit px-5 py-2 bg-[#ffffff] 
          align-center justify-center gap-x-2 rounded-lg text-black 
          hover:cursor-pointer'
        >
          <div className='w-5 h-5 relative'>
            <Image src={github} fill={true} alt='github' />
          </div>
          Github
        </Link>
        <Link
          href='/register'
          className='relative px-5 py-2 bg-[#ffffff21] border-solid border-[1px] border-white text-white font-light 
            rounded-lg hover:bg-[#FFB23E21] hover:border-[#FFB23E] hover:text-[#FFB23E] 
            hover:cursor-pointer transition-all duration-120 ease-in-out'
        >
          start for free
        </Link>
      </div>
      <p className='absolute bottom-6 left-2/4 translate-x-[-50%] text-white font-thin'>
        by cristian
      </p>
    </main>
  )
}
