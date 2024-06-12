'use client'
import { Button } from '@/components/ui/buttons/Button'
import { InputField } from '@/components/ui/inputField/InputField'
import { SelectField } from '@/components/ui/inputField/SelectField'

export function AddUser() {
  return (
    <>
      <div className='flex-auto h-full'>
        <div className='flex justify-center overflow-auto pb-10 h-full'>
          <div className='border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border min-w-fit w-1/3 h-fit p-10'>
            <form>
              <div className='space-y-12 '>
                <div className='border-b border-gray-900/10 pb-12'>
                  <h2 className='text-base font-semibold leading-7 text-gray-900'>
                    Профиль пользователя
                  </h2>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    Эта страница содержит данные о пользователе.
                  </p>

                  <div className='col-span-full'>
                    <label
                      htmlFor='photo'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Фото
                    </label>
                    <div className='mt-2 flex items-center gap-x-3'>
                      <svg
                        className='h-12 w-12 text-gray-300'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                          clip-rule='evenodd'
                        />
                      </svg>
                      <Button
                        type='button'
                        className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                      >
                        Изменить
                      </Button>
                    </div>
                  </div>

                  <div className='col-span-full'>
                    <label
                      htmlFor='cover-photo'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Фото профиля
                    </label>
                    <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                      <div className='text-center'>
                        <svg
                          className='mx-auto h-12 w-12 text-gray-300'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                            clip-rule='evenodd'
                          />
                        </svg>
                        <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                          <label
                            htmlFor='file-upload'
                            className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                          >
                            <span>Загрузите файл</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='sr-only'
                            />
                          </label>

                          <p className='pl-1'>или перенесите</p>
                        </div>
                        <p className='text-xs leading-5 text-gray-600'>
                          PNG, JPG, GIF до 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Персональна информация
                </h2>

                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <div className='sm:col-span-4 min-w-fit justify-center'>
                    <InputField
                      type='text'
                      id='userName'
                      name='userName'
                      autoComplete='userName'
                      placeholder='пример Ivanov_Ivan@gmail.com'
                      label='Логин'
                    />

                    <div className='sm:col-span-3'>
                      <InputField
                        type='text'
                        id='first-name'
                        name='first-name'
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
                        name='role'
                        autoComplete='role'
                        placeholder='Введите роль'
                        label='Роль'
                      />
                    </div>

                    <div className='sm:col-span-4'>
                      <InputField
                        type='text'
                        id='password'
                        name='password'
                        autoComplete='password'
                        placeholder='Введите пароль'
                        label='Пароль'
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
                <Button
                  type='button'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  Отмена
                </Button>
                <Button
                  type='submit'
                  className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Сохранить
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
