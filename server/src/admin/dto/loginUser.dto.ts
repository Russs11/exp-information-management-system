import { IsString, MinLength } from 'class-validator'

export class LoginUserDto {
	@IsString()
	login: string

	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	@IsString()
	password: string
}
