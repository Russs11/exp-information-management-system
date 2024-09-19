import { Role, InspectionOfScene } from 'prisma/generated/client'
import { Transform } from 'class-transformer'
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator'

export class UpdateUserDto {
	@IsString()
	@IsOptional()
	login: string

	@IsString()
	@IsOptional()
	name: string

	@MinLength(6, { message: 'Password must be at least 6 characters long' })
	@IsString()
	@IsOptional()
	password: string

	@IsEnum(Role)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	role: Role

	@IsOptional()
	inspections_of_scene: InspectionOfScene[]
}
