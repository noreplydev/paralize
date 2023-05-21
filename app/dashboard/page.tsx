import { getCurrentSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function Dashboard () {
  const session = await getCurrentSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
