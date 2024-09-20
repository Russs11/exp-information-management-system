import { Role } from 'prisma/generated/client'

export interface User {
	id: string
	role: Role
	iat: number
	exp: number
	last: number
}