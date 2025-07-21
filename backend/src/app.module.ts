import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import config from '../config/configuration'
import { validationSchema } from '../env.local.validation'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	controllers: [AppController],
	imports: [
		ConfigModule.forRoot({
			cache: true,
			envFilePath: ['.env.local'],
			isGlobal: true,
			load: [config],
			validationSchema
		})
	],
	providers: [AppService]
})
export class AppModule {}
