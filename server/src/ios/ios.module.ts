import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { InspectionOfSceneController } from './ios.controller'
import { InspectionOfSceneService } from './ios.service'

@Module({
	controllers: [InspectionOfSceneController],
	providers: [InspectionOfSceneService, PrismaService],
	exports: []
})
export class InspectionOfSceneModule {}
