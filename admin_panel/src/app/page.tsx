import { Header } from '@/components/header/Header'
import Link from 'next/link'


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col  bg-gray-100 '>
        <Header />
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        Home
        <Link href='/auth'>auth</Link>
      </div>
    </main>
  )
}
