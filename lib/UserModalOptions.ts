// Icons
import user from '@/public/assets/svg/user.svg'
import card from '@/public/assets/svg/credit-card.svg'
import create from '@/public/assets/svg/create.svg'
import logout from '@/public/assets/svg/logout.svg'
import { signOut } from 'next-auth/react'

export const ModalOptions = [
  {
    name: 'Account settings',
    icon: user,
    action: () => {}
  },
  {
    name: 'Billing details',
    icon: card,
    action: () => {}
  },
  {
    name: 'Create project',
    icon: create,
    action: () => {}
  },
  {
    name: 'Logout',
    icon: logout,
    action: () => signOut()
  }
]