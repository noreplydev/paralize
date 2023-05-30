'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

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
    <form>
      <input
        type='text'
        placeholder='Search'
        defaultValue={''}
        onChange={e => debounced(e.target.value)}
      />
    </form>
  )
}
