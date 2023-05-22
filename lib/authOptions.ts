import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { redirect } from 'next/dist/server/api-utils'

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    })
  ], 
  pages: {
    signIn: '/login',
    signOut: '/login',
  }, 
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session }) {
      if (token && session.user) {
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    }
  }
}
