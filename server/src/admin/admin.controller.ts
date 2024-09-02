import {
	Body,
	Controller,
	HttpCode,
	Post,
	Res,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { AdminService } from './admin.service'
import { CreateUserDto } from './dto/createUser.dto'

@Controller('admin')
export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('create_user_not_by_admin')
	async create(
		@Body() сreateUserDto: CreateUserDto,
		@Res({ passthrough: true }) res: Response
	) {
		return await this.adminService.createUser(сreateUserDto)
	}
}
