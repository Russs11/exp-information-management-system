import { Metadata } from 'next'
import { Auth } from './Auth'

export const metadata: Metadata = {
  title: 'Auth',
  description: 'login',
}

export default function AuthPage() {
  return <Auth />
}
