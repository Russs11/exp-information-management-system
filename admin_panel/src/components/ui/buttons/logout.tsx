import { IButtonProps } from './ButtonProps'

export const Logout = ({
  children,
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      type='button'
      className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-800'
      {...props}
    >
      <span className='absolute -inset-1.5'></span>
      <span className='sr-only'>Показать уведомления</span>
      <svg
        className='h-6 w-6'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M21 12L13 12'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}
