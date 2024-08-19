import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module';
import { InspectionOfSceneModule } from './ios/ios.module'
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		InspectionOfSceneModule,
		AdminModule
	]
})
export class AppModule {}
