import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ISelectFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  id: string
  name: string
  label: string
  autoComplete?: string
}
