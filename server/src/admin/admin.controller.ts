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
import { LoginUserDto } from './dto/loginUser.dto'

@Controller('admin')
export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('create_user_not_by_admin')
	async create(@Body() сreateUserDto: CreateUserDto) {
		return await this.adminService.createUser(сreateUserDto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(
		@Body() loginUserDto: LoginUserDto,
		@Res({ passthrough: true }) res: Response
	) {
		const { refreshToken, ...response } =
			await this.adminService.loginUser(loginUserDto)
		this.adminService.addRefreshTokenFromResponse(res, refreshToken)
		return response
	}
}