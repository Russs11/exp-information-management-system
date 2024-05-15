import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { IOSController } from './ios.contriller'
import { IOSService } from './ios.service'

@Module({
	controllers: [IOSController],
	providers: [IOSService, PrismaService],
	exports: []
})
export class IOSModule {}
