import { IsOptional, IsString } from 'class-validator'

export class IOSDto {
	@IsString()
	@IsOptional()
	dateOfTheInspectionOfTheScene: string

	@IsString()
	@IsOptional()
	userId: string
}
