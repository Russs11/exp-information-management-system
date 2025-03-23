import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	Res,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Response } from 'express'
import { AdminService } from './admin.service'
import { IsAdmin } from './decorators/admin.decorator'
import { Auth } from './decorators/auth.decorator'
import { CurrentUser } from './decorators/currentUser.decorator'
import { CreateUserDto } from './dto/createUser.dto'
import { LoginUserDto } from './dto/loginUser.dto'
import { UpdateUserDto } from './dto/updateUser.dto'
import { ParseCookiePipe } from './pipes/userID.pipe'
import { User } from './interfaces/interfaces'

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

	// @IsAdmin()
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
	@Get('get_user_profile/:id')
	async getUserProfile(
		@CurrentUser(ParseCookiePipe) user: string,
		@Param('id') userId: string
	) {
		if (!userId) return 'userId not found'
		return this.adminService.getUserProfile(userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	// @IsAdmin()
	@Auth()
	@Put('update_user/:id')
	async updateUser(
		@CurrentUser(ParseCookiePipe) user: string,
		@Param('id') userId: string,
		@Body() data: UpdateUserDto
	) {
		return this.adminService.updateUser(userId, data)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@IsAdmin()
	@Auth()
	@Delete('delete_user')
	async deleteUser(
		@CurrentUser(ParseCookiePipe) user: string,
		@Query('id') userId: string
	) {
		if (!userId) return 'userId not found'
		return await this.adminService.deleteUser(userId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	// @IsAdmin()
	@Auth()
	@Get('get_current_user_profile')
	async getCurrentUserProfile(
		@CurrentUser(ParseCookiePipe) user: User,
		
	) {
		
		if (!user.id) return 'userId not found'
		return this.adminService.getUserProfile(user.id)
	}
}
