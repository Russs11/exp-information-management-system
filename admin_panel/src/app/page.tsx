import { UserList } from './userList/UserList'


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col  bg-gray-100'>
      <UserList />
    </main>
  )
}
