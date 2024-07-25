import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IInputFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: string
  id: string
  name: string
  label: string
  placeholder?: string
  autoComplete?: string
  isNumber?: boolean
  state?: 'error' | 'success'
}