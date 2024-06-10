import { Header } from '@/components/header/Header'
import { Metadata } from 'next'
import { AddUser } from './AddUser'

export const metadata: Metadata = {
  title: 'AddUser',
}

export default function AddUserPage() {
  return (
    <div className='bg-gray-100 overflow-hidden'>
      <Header></Header>
      <div className = 'overflow-hidden'>
        <AddUser />
      </div>
    </div>
  )
}
