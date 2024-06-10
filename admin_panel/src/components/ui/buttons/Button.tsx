import { IButtonProps } from './ButtonProps'

export const Button = ({
  children,
  className,
  type,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  )
}
