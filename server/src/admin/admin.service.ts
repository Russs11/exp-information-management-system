import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { hash } from 'argon2'
import { Response } from 'express'
import { Role } from 'prisma/generated/client'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './dto/createUser.dto'
import { LoginUserDto } from './dto/loginUser.dto'

@Injectable()
export class AdminService {
	EXPIRE_DAY_REFRESH_TOKEN = 1
	REFRESH_TOKEN_NAME = 'refreshToken'

	constructor(
		private prisma: PrismaService,
		private jwt: JwtService
	) {}

	async createUser(сreateUserDto: CreateUserDto) {
		const oldUser = await this.getByLogin(сreateUserDto.login)

		if (oldUser) throw new BadRequestException('User already exists')

		const { password, ...user } = await this.create(сreateUserDto)

		return user
	}

	async loginUser(loginUserDto: LoginUserDto) {
		
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
	addRefreshTokenFromResponse(res: Response, refreshToken: string) {
		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

		res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			secure: true,
			sameSite: 'none'
		})
	}
}