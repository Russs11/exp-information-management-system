import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './dto/createUser.dto'

@Injectable()
export class AdminService {
	constructor(private prisma: PrismaService) {}

	createUser(CreateUserDto: CreateUserDto) {
		return 'This action adds a new admin'
	}
}
