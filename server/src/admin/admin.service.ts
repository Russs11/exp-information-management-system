import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { hash, verify } from 'argon2'
import { Response } from 'express'
import { Role } from 'prisma/generated/client'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './dto/createUser.dto'
import { LoginUserDto } from './dto/loginUser.dto'

@Injectable()
export class AdminService {
	EXPIRE_DAY_JWT_TOKEN = 1
	JWT_TOKEN_NAME = 'jwtToken'

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
		const { password, ...user } = await this.validateUser(loginUserDto)

		const token = this.issueToken(user.id, user.role)
		return { user, token }
	}

	async getAllUsers() {
		return await this.prisma.user.findMany({
			select: {
				id: true,
				createAt: true,
				updateAt: true,
				login: true,
				name: true,
				password: false,
				role: true,
				inspections_of_scene: true
			}
		})
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

		const jwtToken = this.jwt.sign(data, { expiresIn: '1d' })

		return jwtToken
	}
	addJWTTokenFromResponse(res: Response, jwtToken: string) {
		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_JWT_TOKEN)

		res.cookie(this.JWT_TOKEN_NAME, jwtToken, {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			secure: true,
			sameSite: 'none'
		})
	}
	removeJWTTokenFromResponse(res: Response) {
		res.cookie(this.JWT_TOKEN_NAME, '', {
			httpOnly: true,
			domain: 'localhost',
			expires: new Date(0),
			secure: true,
			sameSite: 'none'
		})
	}
	private async validateUser(loginUserDto: LoginUserDto) {
		const user = await this.getByLogin(loginUserDto.login)

		if (!user) throw new NotFoundException('User not found')

		const isValid = await verify(user.password, loginUserDto.password)

		if (!isValid) throw new UnauthorizedException('Invalid password')

		return user
	}

}
