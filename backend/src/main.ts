import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const config = app.get(ConfigService)
	await app.listen(config.get<number>('port')!)
	console.log(`Server run on port: http://localhost:${process.env.PORT}`)
}

bootstrap().catch(err => {
	console.error('Failed to start the application:', err)
	process.exit(1)
})
