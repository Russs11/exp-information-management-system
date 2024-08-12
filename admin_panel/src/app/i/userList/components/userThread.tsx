'use client'
import Image from 'next/image'
import Link from 'next/link'


interface IUserThread{
  name: string,
  id: number
}

export function UserThread({name, id}: IUserThread) {
	return (
    <tr>
      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
        <div className='flex px-2 py-1'>
          <div>
            <Image
              src='/Petrov_cr.jpg'
              className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-in-out text-sm h-9 w-9 rounded-xl'
              alt='user1'
              width={36}
              height={36}
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h6 className='mb-0 leading-normal text-sm'>{`${name} ${id} Иван`}</h6>
            <p className='mb-0 leading-tight text-xs text-slate-400'>
              Иванович
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
          User
        </span>
      </td>
      <td className='p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
        <span className='font-semibold leading-tight text-xs text-slate-400'>
          23.04.24
        </span>
        <span className='font-semibold leading-tight text-xs text-slate-400'>
          в 23:05
        </span>
      </td>
      <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent'>
        <Link
          href='/i/addUser'
          className='font-semibold leading-tight text-xs text-slate-400'
        >
          {' '}
          Редакт.{' '}
        </Link>
      </td>
    </tr>
  )
}