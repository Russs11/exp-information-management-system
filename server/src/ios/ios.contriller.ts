import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { InspectionOfSceneCreateDto } from './dto/iosCreate.dto'
import { InspectionOfSceneGetByUserIdDto } from './dto/iosGetByUserId.dto'
import { InspectionOfSceneService } from './ios.service'

@Controller('ios')
export class InspectionOfSceneController {
	constructor(
		private readonly inspectionOfSceneService: InspectionOfSceneService
	) {}

	@Get('all')
	@Auth()
	async getAll() {
		const response = await this.inspectionOfSceneService.getAll()
		return response
	}

	@Post('byId')
	@Auth()
	async getByUserId(@Body() dto: InspectionOfSceneGetByUserIdDto) {
		const response = await this.inspectionOfSceneService.getByUserId(dto.userId)
		return response
	}

	@Post('create')
	@Auth()
	async create(@Body() dto: InspectionOfSceneCreateDto, @CurrentUser('id') userId: string) {
		const response = await this.inspectionOfSceneService.create(dto, userId)
		return response
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put('update')
	@Auth()
	async update(
		@Body() dto: InspectionOfSceneCreateDto,
		inspectionOfSceneId: string,
		userId: string
	) {
		const response = await this.inspectionOfSceneService.update(
			dto,
			inspectionOfSceneId,
			userId
		)
		return response
	}
}
