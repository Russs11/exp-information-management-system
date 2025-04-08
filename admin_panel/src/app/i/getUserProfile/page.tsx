
import { Metadata } from 'next'
import { GetUserProfile } from './GetUserProfile'

export const metadata: Metadata = {
  title: 'getUserProfile',
}

export default function AddUserPage() {
  return (
    <div className='flex flex-col bg-gray-100 overflow-auto'>
      <GetUserProfile/>
    </div>
  )
}
