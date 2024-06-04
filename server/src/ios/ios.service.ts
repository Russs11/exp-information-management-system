import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { InspectionOfSceneCreateDto } from './dto/iosCreate.dto'

@Injectable()
export class InspectionOfSceneService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return this.prisma.inspectionOfScene.findMany()
	}

	async getByUserId(userId: string) {
		return this.prisma.inspectionOfScene.findMany({ where: { userId } })
	}

	async create(dto: InspectionOfSceneCreateDto, userId: string) {
		return this.prisma.inspectionOfScene.create({
			data: {
				dateOfTheInspectionOfTheScene: dto.dateOfTheInspectionOfTheScene,
				user: { connect: { id: userId } }
			}
		})
	}

	async update(
		dto: Partial<InspectionOfSceneCreateDto>,
		userId: string,
		inspectionOfSceneId: string
	) {
		return this.prisma.inspectionOfScene.update({
			where: {
				userId,
				id: inspectionOfSceneId
			},
			data: dto
		})
	}

	async delete(userId: string, inspectionOfSceneId: string) {
		return this.prisma.inspectionOfScene.delete({
			where: {
				userId,
				id: inspectionOfSceneId
			}
		})
	}
}
