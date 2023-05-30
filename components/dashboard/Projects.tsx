import SearchBar from './Searchbar'

export default function Projects ({ searchParams }: any) {
  return (
    <div>
      <SearchBar />
      <ProjectsGrid searchParam={searchParams?.search || ''} />
    </div>
  )
}

function ProjectsGrid ({ searchParam }: { searchParam: string }) {
  return <div>{searchParam}</div>
}
