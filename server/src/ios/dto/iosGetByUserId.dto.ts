import { IsString } from 'class-validator'

export class InspectionOfSceneGetByUserIdDto {
	getByUserId
	@IsString()
	userId: string
}
