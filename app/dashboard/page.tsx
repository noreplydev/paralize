import { getCurrentSession } from '@/lib/session'
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
      <p>hola</p>
    </div>
  )
}

async function ProjectsGrid ({ searchParams }: { searchParams: any }) {
  const projects = await getProjects(searchParams)
  console.log(projects)
  return <div>sorry mami</div>
}

async function getProjects (params: any) {
  const searchParams = new URLSearchParams(params)
  const projects = await fetch(
    `${process.env.DOMAIN}/api/projects?${searchParams.toString()}`
  ).then((res) => res.json())

  console.log(projects)

  return {
    exmaple: 'hola'
  }
}
