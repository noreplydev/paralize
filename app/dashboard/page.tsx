import { getCurrentSession } from '@/lib/session'
import Image from 'next/image'

import UserPin from '@/components/dashboard/UserPin'
import SearchBar from '@/components/dashboard/Searchbar'

export default async function Dashboard ({
  searchParams
}: {
  searchParams: any
}) {
  const session = await getCurrentSession()

  if (!session) {
    // redirect('/login')
  }

  return (
    <div
      className='relative flex flex-col items-start justify-start px-6 
        h-full w-full md:px-24'
    >
      <h1 className='text-white text-3xl font-medium'>Projects</h1>
      <SearchBar />
      {/* @ts-expect-error Server Component */}
      <ProjectsGrid searchParams={searchParams} />
    </div>
  )
}

async function ProjectsGrid ({ searchParams }: { searchParams: any }) {
  const projects = await getProjects(searchParams)
  return <div>{projects.example}</div>
}

async function getProjects (params: any) {
  const searchParams = new URLSearchParams(params)
  const res = await fetch(
    `${process.env.DOMAIN}/api/projects?${searchParams.toString()}`
  )
  const projects = await res.json()
  return projects
}
