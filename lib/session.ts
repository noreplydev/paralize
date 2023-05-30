import { getServerSession } from 'next-auth/next'
import { authOptions } from './authOptions'
import { Session } from '@/types/Session'

export async function getCurrentSession() {
  const session = await getServerSession(authOptions)

  return session as Session
}