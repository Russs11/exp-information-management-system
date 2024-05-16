import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { InspectionOfSceneCreateDto } from './dto/ios.dto'
import { InspectionOfSceneService } from './ios.service'

@Controller('ios')
export class InspectionOfSceneController {
	constructor(
		private readonly inspectionOfSceneService: InspectionOfSceneService
	) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('create')
	async create(@Body() dto: InspectionOfSceneCreateDto) {
		const response = await this.inspectionOfSceneService.create(dto)
		return response
	}
}
