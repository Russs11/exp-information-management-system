import { Metadata } from 'next'
import { UserList } from './UserList'
import { SheetDemo } from '@/app/mainPage/Sheets'

export const metadata: Metadata = {
  title: 'UserList',
}

export default function DashboardPage() {
  return (
    <div className='flex flex-col bg-gray-100 overflow-auto'>
      <UserList />
      {/* <SheetDemo/> */}
    </div>
  )
}
