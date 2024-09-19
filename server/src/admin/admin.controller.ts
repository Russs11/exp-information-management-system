import {
	Body,
	Controller,
	Delete,
	Get,
	Headers,
	HttpCode,
	Post,
	Put,
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
import { ParseCookiePipe } from './pipes/userID.pipe'
import { CurrentUser } from './decorators/currentUser.decorator'

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

	@HttpCode(200)
	@Get('logout')
	logout(@Res({ passthrough: true }) res: Response) {
		this.adminService.removeJWTTokenFromResponse(res)
		return true
	}

	@IsAdmin()
	@Auth()
	@Get('get_all')
	async getAll() {
		return this.adminService.getAllUsers()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@IsAdmin()
	@Auth()
	@Post('create_user_by_admin')
	async createUser(@Body() сreateUserDto: CreateUserDto) {
		return await this.adminService.createUser(сreateUserDto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	// @IsAdmin()
	@Auth()
	@Put('update_user')
	async updateUser(@CurrentUser(ParseCookiePipe) user: string) {
		return user
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	// @IsAdmin()
	@Auth()
	@Delete('delete_user')
	async deleteUser(@CurrentUser(ParseCookiePipe) user: string, userId: string) {
		return user
	}
}
