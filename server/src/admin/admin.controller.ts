import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { AdminService } from './admin.service'
import { CreateUserDto } from './dto/createUser.dto'
import { UpdateAdminDto } from './dto/update-admin.dto'

@Controller('admin')
export class AdminController {
	constructor(private readonly adminService: AdminService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('create_user')
	create(@Body() CreateUserDto: CreateUserDto) {
		return this.adminService.create(CreateUserDto)
	}

	@Get()
	findAll() {
		return this.adminService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.adminService.findOne(+id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
		return this.adminService.update(+id, updateAdminDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.adminService.remove(+id)
	}
}
