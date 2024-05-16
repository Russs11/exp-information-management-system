import { IsOptional, IsString } from 'class-validator'

export class InspectionOfSceneDto {
	@IsString()
	@IsOptional()
	dateOfTheInspectionOfTheScene: string

	@IsString()
	@IsOptional()
	userId: string
}
