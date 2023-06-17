// Icons
import user from '@/public/assets/svg/user.svg'
import card from '@/public/assets/svg/credit-card.svg'
import create from '@/public/assets/svg/create.svg'
import logout from '@/public/assets/svg/logout.svg'
import { signOut } from 'next-auth/react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

export const loggedInOptions = [
  {
    name: 'Dashboard',
    icon: user,
    action: ({ router }: { router: AppRouterInstance }) => {
      router.push('/dashboard')
    }
  },
  {
    name: 'Account settings',
    icon: user,
    action: ({ router }: { router: AppRouterInstance }) => {
      router.push('/account')
    }
  },
  {
    name: 'Billing details',
    icon: card,
    action: ({ router }: { router: AppRouterInstance }) => {
      router.push('/billing')
    }
  },
  {
    name: 'Create project',
    icon: create,
    action: () => { }
  },
  {
    name: 'Logout',
    icon: logout,
    action: () => signOut()
  }
]

export const loggedOutOptions = [
  {
    name: 'Login',
    icon: user,
    action: ({ router }: { router: AppRouterInstance }) => {
      router.push('/login')
    }
  },
]