'use client'
import Image from 'next/image'

export function Auth() {
  return (
    <>
      <div className='flex justify-center py-20 h-screen min-w-96 bg-gray-100'>
        <div className='flex min-h-fit flex-col justify-center p-10 border-0 border-transparent border-solid shadow-2xl rounded-2xl bg-clip-border w-1/4 min-w-96 h-fit sm:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <Image
              src='/auth.svg'
              alt='auth_logo'
              className='dark:invert justify-self-center mx-auto h-10 w-auto'
              width={36}
              height={36}
              priority
            />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Войти в профиль
            </h2>
          </div>

          <div className='mt-10 sm:px-8 sm:mx-auto w-full '>
            <form className='space-y-6' action='#' method='POST'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Логин
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    placeholder='Введите логин'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 outline-none'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Пароль
                  </label>
                  <div className='text-sm'></div>
                </div>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    placeholder='Введите пароль'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 outline-none'
                  />
                </div>
              </div>

              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
