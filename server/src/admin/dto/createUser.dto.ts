import { Role } from '@prisma/client'
import { Transform } from 'class-transformer'
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
	@IsString()
	login: string

	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	@IsString()
	password: string

	@IsString()
	@IsOptional()
	name: string

	@IsEnum(Role)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	role: Role
}
