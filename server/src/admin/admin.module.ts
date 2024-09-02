import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma.service'
import { AdminController } from './admin.controller'
import { AdminService } from './admin.service'
import { getJwtConfig } from 'src/config/jwt.config'

@Module({
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		})
	],
	controllers: [AdminController],
	providers: [AdminService, PrismaService]
})
export class AdminModule {}
