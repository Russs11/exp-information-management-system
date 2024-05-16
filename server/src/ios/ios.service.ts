import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class InspectionOfSceneService {
	constructor(private prisma: PrismaService) {}

	async getAll(userId: string) {
		return this.prisma.inspectionOfScene.findMany({ where: { userId } })
	}
}
