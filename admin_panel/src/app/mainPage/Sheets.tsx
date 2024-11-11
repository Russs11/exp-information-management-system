'use client'
import { Button } from '@/components/ui/buttons/Button'
import { InputField } from '@/components/ui/inputField/InputField'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { errorCatch } from '@/api/error'

import { SelectField } from '@/components/ui/inputField/SelectField'
import { adminService } from '@/services/admin.service'
import { IUser } from '@/types/auth.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function SheetDemo() {
  const { push } = useRouter()
  const { register, handleSubmit, reset } = useForm<IUser>({
    mode: 'onChange',
    shouldUseNativeValidation: true,
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['createUser'],
    mutationFn: (data: IUser) => adminService.createUser(data),
    onSuccess() {
      reset()
      toast.success('Пользователь добавлен!')
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError(error) {
      toast.error(errorCatch(error))
    },
  })

  const cancelHandler = () => {
    push('/i/userList')
  }
  const onSubmit: SubmitHandler<IUser> = data => {
    mutate(data)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <Button className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#94a3b8'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
              <circle cx='9' cy='7' r='4' />
              <line x1='19' x2='19' y1='8' y2='14' />
              <line x1='22' x2='16' y1='11' y2='11' />
            </svg>
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Профиль пользователя</SheetTitle>
          <SheetDescription>
            Эта страница содержит данные о пользователе.
          </SheetDescription>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-12 '>
              <div className='border-b border-gray-900/10 pb-12'>
                <div className='col-span-full'>
                  <label
                    htmlFor='photo'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Фото
                  </label>
                  <div className='mt-2 flex items-center gap-x-3'>
                    <div className='flex items-center justify-center w-60 h-72 rounded-lg border border-dashed border-gray-900/25'>
                      <svg
                        className='h-56 w-56 text-gray-300'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <Button
                      type='button'
                      className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                    >
                      Изменить
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Персональна информация
              </h2>

              <div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4 min-w-fit justify-center'>
                  <InputField
                    type='login'
                    id='email'
                    {...register('login', {
                      required: 'Поле логин обязательное',
                    })}
                    autoComplete='login'
                    placeholder='Введите логин'
                    label='Логин'
                  />

                  <div className='sm:col-span-4'>
                    <InputField
                      type='text'
                      id='password'
                      {...register('password', {
                        required: 'Пароль должен быть не менее 6-ти символов',
                        // minLength: 6,
                      })}
                      autoComplete='password'
                      placeholder='Введите пароль'
                      label='Пароль'
                    />
                  </div>

                  <div className='sm:col-span-3'>
                    <InputField
                      type='text'
                      id='first-name'
                      {...register('name', {
                        required: 'Укажите имя',
                      })}
                      autoComplete='first-name'
                      placeholder='Введите имя'
                      label='Имя'
                    />
                  </div>

                  <div className='sm:col-span-3'>
                    <InputField
                      type='text'
                      id='last-name'
                      name='last-name'
                      autoComplete='last-name'
                      placeholder='Введите фамилию'
                      label='Фамилия'
                    />
                  </div>

                  <div className='sm:col-span-3'>
                    <InputField
                      type='text'
                      id='middle-name'
                      name='middle-name'
                      autoComplete='middle-name'
                      placeholder='Введите отчество'
                      label='Отчество'
                    />
                  </div>
                  <div className='sm:col-span-3'>
                    <InputField
                      type='date'
                      id='birth-date'
                      name='birth-date'
                      autoComplete='birth-date'
                      placeholder=''
                      label='Дата рождения'
                    />
                  </div>

                  <div className='sm:col-span-4'>
                    <InputField
                      type='text'
                      id='role'
                      {...register('role', {
                        required: 'Введите роль: admin или user',
                      })}
                      autoComplete='role'
                      placeholder='Введите роль'
                      label='Роль'
                    />
                  </div>

                  <div className='col-span-full'>
                    <InputField
                      type='text'
                      id='post'
                      name='post'
                      autoComplete='post'
                      placeholder='Введите должность'
                      label='Должность'
                    />
                  </div>
                  <div className='sm:col-span-3'>
                    <SelectField
                      id='unit'
                      name='unit'
                      autoComplete='unit-name'
                      label='Подразделение'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <SheetClose asChild>
                <Button
                  type='button'
                  className='text-sm font-semibold leading-6 text-gray-900'
                  onClick={cancelHandler}
                >
                  Отмена
                </Button>
              </SheetClose>

              <Button
                type='submit'
                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Сохранить
              </Button>
            </div>
          </form>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
