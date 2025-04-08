import { Metadata } from 'next'
import { UserList } from './UserList'


export const metadata: Metadata = {
  title: 'UserList',
}

export default function DashboardPage() {
  return (
    <div className='flex flex-col bg-gray-100 overflow-auto'>
      <UserList />
    </div>
  )
}
