import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class IOSService {
	constructor(private prisma: PrismaService) { }
	
	async getAll(userId: string) {
		// return this.prisma.ios
	}
}
