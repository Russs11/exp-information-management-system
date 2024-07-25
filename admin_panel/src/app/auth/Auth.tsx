'use client'
import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../components/ui/buttons/Button'
import { InputField } from '../../components/ui/inputField/InputField'

export function Auth() {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: 'onChange',
  })

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) => authService.main(data),
    onSuccess() {
      reset()
      push('/userList')
      console.log('success')
    },
  })

  const onSubmit: SubmitHandler<IAuthForm> = data => {
    console.log(data)
    mutate(data)
  }

  return (
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
          <div className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Войти в профиль
          </div>
        </div>

        <div className='mt-10 sm:px-8 sm:mx-auto w-full '>
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <InputField
              id='email'
              name='login'
              type='login'
              placeholder='Введите логин'
              label='Логин'
              {...(register('email'),
              {
                required: 'Email is required!',
              })}
            />
            <InputField
              id='password'
              name='password'
              type='password'
              placeholder='Введите пароль'
              label='Пароль'
              {...(register('password'),
              {
                required: 'Password is required!',
              })}
            />
            <div className='flex flex-col justify-center'>
              <Button className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type='submit'>
                Войти
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
