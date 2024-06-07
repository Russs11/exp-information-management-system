import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IInputFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>{
	id: string,
	name: string,
	type: string,
	label: string
	placeholder: string,
}