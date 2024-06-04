import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { Role } from 'prisma/generated/client'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async findAll(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id }
		})
		if (user.role === 'admin') {
			return await this.prisma.user.findMany({
				select: {
					id: true,
					createAt: true,
					updateAt: true,
					login: true,
					name: true,
					password: false,
					role: true
				}
			})
		}
		return []
	}

	getById(id: string) {
		return this.prisma.user.findUnique({
			where: { id },
			include: {}
		})
	}

	getByLogin(login: string) {
		return this.prisma.user.findUnique({
			where: { login }
		})
	}

	async create(dto: AuthDto) {
		const user = {
			login: dto.login,
			name: '',
			password: await hash(dto.password)
		}

		return this.prisma.user.create({
			data: user
		})
	}

	async update(id: string, dto: UserDto) {
		let data = dto

		if (dto.password) {
			data = { ...dto, password: await hash(dto.password) }
		}

		return this.prisma.user.update({
			where: { id },
			data,
			select: {
				id: true,
				createAt: true,
				updateAt: true,
				login: true,
				name: true,
				password: false,
				role: true
			}
		})
	}
}
