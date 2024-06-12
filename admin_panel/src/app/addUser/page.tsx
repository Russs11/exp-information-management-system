
import { Metadata } from 'next'
import { AddUser } from './AddUser'

export const metadata: Metadata = {
  title: 'AddUser',
}

export default function AddUserPage() {
  return (
    < div className='flex flex-col bg-gray-100 overflow-auto'>
        <AddUser />
    </div>
  )
}
