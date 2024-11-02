import type { Metadata } from 'next'
import { UserList } from './userList/UserList'

export const metadata: Metadata = {
  title: 'Dashboard',
}
export default function Dashboard() {
  return (
    <main className='flex min-h-screen flex-col pb-12 bg-gray-100'>
      <UserList />
    </main>
  )
}
