import { IsOptional, IsString } from 'class-validator'

export class InspectionOfSceneCreateDto {
	@IsString()
	dateOfTheInspectionOfTheScene: string

	// @IsString()
	// @IsOptional()
	// userId?: string
}
