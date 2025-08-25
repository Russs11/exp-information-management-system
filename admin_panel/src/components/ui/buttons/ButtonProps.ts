import { IUser } from '@/types/auth.types'
import { DetailedHTMLProps, DetailsHTMLAttributes, HTMLAttributes } from 'react'

export interface IButtonProps extends DetailedHTMLProps<DetailsHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	type?: 'submit' | 'reset' | 'button'
	data?: IUser
}