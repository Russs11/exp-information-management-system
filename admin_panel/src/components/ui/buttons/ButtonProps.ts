import { IUser } from '@/types/auth.types'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	type?: 'submit' | 'reset' | 'button'
	data?: IUser
}