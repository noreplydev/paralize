'use client'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchBar () {
  const debounced = useDebouncedCallback(values => {
    console.log(values)
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
