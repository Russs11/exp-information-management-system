import { Transform } from 'class-transformer'
import {
	IsOptional,
	MinLength,
	IsString,
	IsEnum
} from 'class-validator'
import { Role } from 'prisma/generated/client'

export class UserDto {
	@IsString()
	@IsOptional()
	login: string

	@IsString()
	@IsOptional()
	name: string

	@IsString()
	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	@IsOptional()
	password: string

	@IsEnum(Role)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	role: Role
}
