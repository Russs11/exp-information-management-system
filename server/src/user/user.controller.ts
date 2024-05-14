import {
	Controller,
	Get,
	Body,
	UsePipes,
	HttpCode,
	ValidationPipe,
	Put
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: string) {
		const { password, ...user } = await this.userService.getById(id)
		return user
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put('update')
	async updateUser(@CurrentUser('id') id: string, @Body() userDto: UserDto) {
		return await this.userService.update(id, userDto)
	}
}
