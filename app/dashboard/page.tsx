import { getCurrentSession } from '@/lib/session'

export default async function Dashboard () {
  const session = await getCurrentSession()
  console.log(session)
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
