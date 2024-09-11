import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Res,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { AdminService } from './admin.service'
import { CreateUserDto } from './dto/createUser.dto'
import { LoginUserDto } from './dto/loginUser.dto'
import { Response } from 'express'
import { Auth } from './decorators/auth.decorator'
import { IsAdmin } from './decorators/admin.decorator'

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
		const { token, ...response } =
			await this.adminService.loginUser(loginUserDto)
		this.adminService.addJWTTokenFromResponse(res, token)
		return response
	}

	@Auth()
	@IsAdmin()
	@Get('get_all')
	async getAll() {
		return 'get_all'
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('create_user_not_by_admin')
	async createUser(@Body() сreateUserDto: CreateUserDto) {
		return await this.adminService.createUser(сreateUserDto)
	}
}
