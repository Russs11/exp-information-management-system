'use client'
import { authAdminService } from '@/services/auth-admin.service'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Logout } from '../ui/buttons/logout'
import { RingButton } from '../ui/buttons/RingButton'
import { Profile } from '../ui/profile/Profile'
import { useProfile } from '@/hooks/useProfile'

export function Header() {
  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authAdminService.logout(),
    onSuccess() {
      push('/auth')
    },
  })

  const { data, isLoading } = useProfile()
  console.log('header', data);

  return (
    <>
      <div className='header'>
        <div className='min-h-full'>
          <nav className='bg-gray-800'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex h-16 items-center justify-between'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <Image
                      src='/logo.svg'
                      alt='logo'
                      className='h-8 w-8'
                      width={8}
                      height={8}
                      priority
                    />
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {/* <Link
                        href='/i/userList'
                        className='focus:bg-gray-900  hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium'
                      >
                        Список пользователей
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='ml-4 flex items-center md:ml-6'>
                    <RingButton />
                    <Profile data={data} />
                    <div className='relative ml-3'>
                      <Logout onClick={() => mutate()} />
                    </div>
                  </div>
                </div>
                <div className='-mr-2 flex md:hidden'>
                  <button
                    type='button'
                    className='relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    aria-controls='mobile-menu'
                    aria-expanded='false'
                  >
                    <span className='absolute -inset-0.5'></span>
                    <span className='sr-only'>Open main menu</span>
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg
                      className='block h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                      />
                    </svg>

                    <svg
                      className='hidden h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className='md:hidden' id='mobile-menu'>
              <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
                <Link
                  href='/i/userList'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                >
                  Список пользователей
                </Link>
                <Link
                  href='/i/addUser'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                >
                  Добавить пользователя
                </Link>
              </div>
              <div className='border-t border-gray-700 pb-3 pt-4'>
                <div className='flex items-center px-5'>
                  <div className='flex-shrink-0'>
                    {/* <Image
                      src='/Petrov_cr.jpg'
                      alt='avatar'
                      className='h-8 w-8 rounded-full'
                      width={36}
                      height={36}
                      priority
                    /> */}
                    <div className='flex items-center justify-center w-8 h-8 rounded-full text-2xl text-white bg-slate-600 uppercase '>
                      {data?.name?.charAt(0)}
                    </div>
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium leading-none text-white'>
                      {data?.name}
                    </div>
                    <div className='text-sm font-medium leading-none text-gray-400'>
                      {data?.login}
                    </div>
                  </div>
                  <button
                    type='button'
                    className='relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Показать уведомления</span>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                      />
                    </svg>
                  </button>
                </div>
                <div className='mt-3 space-y-1 px-2'>
                  <a
                    href='#'
                    className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                  >
                    Ваш Профиль
                  </a>
                  <a
                    href='#'
                    className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                  >
                    Настройки
                  </a>
                  <a
                    href='#'
                    className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                  >
                    Выйти
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
