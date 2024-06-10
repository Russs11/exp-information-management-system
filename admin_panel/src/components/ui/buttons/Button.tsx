import { IButtonProps } from './ButtonProps'

export const Button = ({
  children,
	className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      type='submit'
      className='rounded-md min-w-24 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      {...props}
    >
      {children}
    </button>
  )
}
