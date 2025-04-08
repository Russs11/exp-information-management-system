import type { Metadata } from 'next'
import { SheetDemo } from '../i/userList/components/Sheets'

export const metadata: Metadata = {
  title: 'mainApp',
}
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col  bg-gray-100  text-gray-900'>
      main app 
    </main>
  )
}
