import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { InspectionOfSceneCreateDto } from './dto/ios.dto'

@Injectable()
export class InspectionOfSceneService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.inspectionOfScene.findMany()
	}

	async getByUserId(userId: string) {
		return this.prisma.inspectionOfScene.findMany({ where: { userId } })
	}

	async create(dto: InspectionOfSceneCreateDto) {
		return this.prisma.inspectionOfScene.create({ data: {dateOfTheInspectionOfTheScene: dto.dateOfTheInspectionOfTheScene, userId: dto.userId} })
	}
}
