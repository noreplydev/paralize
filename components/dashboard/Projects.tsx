import SearchBar from './Searchbar'

async function getProjects () {
  const res = await fetch(`${process.env.DOMAIN}/api/projects`)
  const projects = await res.json()
  return projects
}

{
  /* @ts-expect-error Async Server Component */
}

export default async function Projects () {
  return (
    <div>
      <SearchBar />
      <ProjectsGrid />
    </div>
  )
}

async function ProjectsGrid () {
  const projects = await getProjects()
  console.log(projects)
  return <div>{projects.example}</div>
}
