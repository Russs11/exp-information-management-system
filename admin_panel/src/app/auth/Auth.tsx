'use client'
import Image from 'next/image'
import { Button } from '../components/ui/buttons/Button'
import { InputField } from '../components/ui/inputField/InputField'

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
              <InputField
                id='email'
                name='email'
                type='email'
                placeholder='Введите логин'
                label='Логин'
              />

              <InputField
                id='password'
                name='password'
                type='password'
                placeholder='Введите пароль'
                label='Пароль'
              />
              <div className='flex justify-center'>
                <Button>Войти</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
