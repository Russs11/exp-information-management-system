import { IButtonProps } from './ButtonProps'
import Image from 'next/image'

export const UserProfileButton = ({
  children,
  className,
  data,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      type='button'
      className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-800'
      id='user-menu-button'
      aria-expanded='false'
      aria-haspopup='true'
      {...props}
    >
      <span className='absolute -inset-1.5'></span>
      <span className='sr-only'>Открыть пользовательское меню</span>

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
    </button>
  )
}
