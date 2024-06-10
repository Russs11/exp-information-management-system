import { Header } from '@/components/header/Header'
import { Metadata } from 'next'
import { AddUser } from './AddUser'

export const metadata: Metadata = {
  title: 'AddUser',
}

export default function AddUserPage() {
  return (
    < div className='bg-gray-100'>
        <Header></Header>
        <AddUser />
    </div>
  )
}
