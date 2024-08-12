import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	Param,
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

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('byId')
	@Auth()
	async getByUserId(@Body() dto: InspectionOfSceneGetByUserIdDto) {
		const response = await this.inspectionOfSceneService.getByUserId(dto.userId)
		return response
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('create')
	@Auth()
	async create(
		@Body() dto: InspectionOfSceneCreateDto,
		@CurrentUser('id') userId: string
	) {
		const response = await this.inspectionOfSceneService.create(dto, userId)
		return response
	}

	@Put('update/:id')
	@Auth()
	async update(
		@Body() dto: Partial<InspectionOfSceneCreateDto>,
		@CurrentUser('id') userId: string,
		@Param('id') inspectionOfSceneId: string
	) {
		try {
			const response = await this.inspectionOfSceneService.update(
				dto,
				userId,
				inspectionOfSceneId
			)
			return response
		} catch (error) {
			throw new HttpException(
				{
					status: HttpStatus.NOT_FOUND,
					error: error.message
				},
				HttpStatus.NOT_FOUND
			)
		}
	}

	@Delete('delete/:id')
	@Auth()
	async delete(
		@CurrentUser('id') userId: string,
		@Param('id') inspectionOfSceneId: string
	) {
		try {
			const response = await this.inspectionOfSceneService.delete(
				userId,
				inspectionOfSceneId
			)

			return response
		} catch (error) {
			throw new HttpException(
				{
					status: HttpStatus.NOT_FOUND,
					error: error.message
				},
				HttpStatus.NOT_FOUND
			)
		}
	}
}
