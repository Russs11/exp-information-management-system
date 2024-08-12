import { PropsWithChildren } from 'react'
import { Header } from '../header/Header'


export default function DashboardLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header />
      {children}
    </div>
  )
}
