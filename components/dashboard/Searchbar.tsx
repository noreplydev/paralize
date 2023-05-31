'use client'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

// Icons
import search from '@/public/assets/svg/search.svg'

export default function SearchBar () {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const debounced = useDebouncedCallback(value => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('search', value)
    router.replace(`${pathname}?${params}`)
  }, 1000)

  return (
    <div className='relative flex flex-row h-fit w-full mt-6 bg-primary rounded-md gap-2.5'>
      <div
        className='relative flex flex-row items-center justify-start h-full w-full
        outline outline-2 outline-transparent focus-within:border-none focus-within:outline-accent bg-transparent
        rounded-l-md outline-offset-4 transition-all duration-12 ease-in-out
        gap-3 px-5 py-3 
      '
      >
        <Image src={search} height={20} width={20} alt='Search for a project' />
        <input
          className='relative flex flex-col h-fit w-full text-white font-light text-lg
            bg-transparent outline-none focus:outline-none
            placeholder:text-gray'
          type='text'
          placeholder='Search'
          defaultValue={''}
          onChange={e => debounced(e.target.value)}
        />
      </div>
      <button
        className='grid place-items-center h-fit w-fit px-5 py-3
          text-lg whitespace-nowrap font-light outline outline-2 outline-transparent
          focus:border-none focus:outline-accent text-white rounded-r-md
          bg-accent transition-all duration-12 ease-in-out outline-offset-4'
      >
        Create project
      </button>
    </div>
  )
}
