'use client'
import { errorCatch } from '@/api/error'
import { Button } from '@/components/ui/buttons/Button'
import { adminService } from '@/services/admin.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

interface IUserThread {
  id: string
  createAt?: string
  updateAt?: string
  login?: string
  name?: string
  role?: string
  password?: string
}

export function UserThread({ name, role, updateAt, id }: IUserThread) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['delete_user'],
    mutationFn: ({ id }: { id: string }) => adminService.deleteUser({ id }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      toast.success(`Пользователь ${name} удален!`)
    },
    onError(error) {
      toast.error(errorCatch(error))
    },
  })

  return (
    <tr>
      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
        <div className='flex gap-2 px-2 py-1'>
          {/* <div>
            <Image
              src='/Petrov_cr.jpg'
              className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-in-out text-sm h-9 w-9 rounded-xl'
              alt='user1'
              width={36}
              height={36}
            />
          </div> */}
          <div className='flex items-center justify-center w-8 h-8 rounded-full text-xl text-white bg-slate-400 uppercase '>
            {name?.charAt(0)}
          </div>
          <div className='flex flex-col justify-center'>
            <h6 className='mb-0 leading-normal text-sm'>{name}</h6>
            <p className='mb-0 leading-tight text-xs text-slate-400'>
              Алексеевич
            </p>
          </div>
        </div>
      </td>
      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
        <p className='mb-0 font-semibold leading-tight text-xs'>
          ОМВД по Евпатории
        </p>
        <p className='mb-0 leading-tight text-xs text-slate-400'>Эксперт</p>
      </td>
      <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent'>
        <span className='text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none'>
          {role}
        </span>
      </td>
      <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
        <span className='font-semibold leading-tight text-xs text-slate-400'>
          {updateAt}
        </span>
        <span className='font-semibold leading-tight text-xs text-slate-400'></span>
      </td>
      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
        <Link
          href={`/i/getUserProfile/?id=${id}`}
          className='font-semibold leading-tight text-xs text-slate-400'
        >
          {' '}
          Редакт.{' '}
        </Link>
        <td className='p-2 text-center align-middle bg-transparent whitespace-nowrap shadow-transparent'>
          <Button
            // type={'submit'}
            className='rounded-md text-sm font-semibold shadow-sm hover:bg-gray-50'
            onClick={() =>
              toast('Удалить пользователя?', {
                action: {
                  label: 'Да?',
                  onClick: () => mutate({ id }),
                },
                cancel: {
                  label: 'Нет?',
                  onClick: () => console.log(''),
                },
              })
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#94a3b8'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M3 6h18' />
              <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
              <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
              <line x1='10' x2='10' y1='11' y2='17' />
              <line x1='14' x2='14' y1='11' y2='17' />
            </svg>
          </Button>
        </td>
      </td>
    </tr>
  )
}
