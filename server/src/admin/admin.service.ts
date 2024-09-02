import { BadRequestException, Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './dto/createUser.dto'
import { Role } from 'prisma/generated/client'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AdminService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService
	) {}

	async createUser(сreateUserDto: CreateUserDto) {
		const oldUser = await this.getByLogin(сreateUserDto.login)

		if (oldUser) throw new BadRequestException('User already exists')

		const { password, ...user } = await this.create(сreateUserDto)

		const token = this.issueToken(user.id, user.role)

		return { user, token }
	}

	//service functions
	private getByLogin(login: string) {
		return this.prisma.user.findUnique({
			where: { login }
		})
	}
	private async create(dto: CreateUserDto) {
		const name = dto.name ? dto.name : ''
		const role = dto.role ? dto.role : 'user'

		const user = {
			login: dto.login,
			name,
			password: await hash(dto.password),
			role
		}

		return this.prisma.user.create({
			data: user
		})
	}

	private issueToken(userId: string, userRole: Role): string {
		const data = { id: userId, role: userRole }

		const jwtToken = this.jwt.sign(data, { expiresIn: '1h' })

		return jwtToken
	}
}
