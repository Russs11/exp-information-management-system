import { IButtonProps } from './ButtonProps'

export const RingButton = ({
  children,
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
			type='button'
			className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-800'
			{...props}>
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
  )
}