import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { RedisStore } from 'connect-redis'
import * as cookieParser from 'cookie-parser'
import session from 'express-session'
import Redis from 'ioredis'

import { ms, StringValue } from '@/libs/common/utils/ms.util'
import { parseBoolean } from '@/libs/common/utils/parse-boolean.util'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const config = app.get(ConfigService)
	const redis = new Redis(config.getOrThrow('REDIS_URI'))

	app.use(cookieParser(config.getOrThrow<string>('COOKIES_SECRET')))
	app.useGlobalPipes(new ValidationPipe({ transform: true }))

	app.use(
		session({
			cookie: {
				domain: config.getOrThrow<string>('SESSION_DOMAIN'),
				httpOnly: parseBoolean(config.getOrThrow<string>('SESSION_HTTP_ONLY')),
				maxAge: ms(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
				sameSite: 'lax',
				secure: parseBoolean(config.getOrThrow<StringValue>('SESSION_SECURE'))
			},
			name: config.getOrThrow<string>('SESSION_NAME'),
			resave: true,
			saveUninitialized: false,
			secret: config.getOrThrow<string>('SESSION_SECRET'),
			store: new RedisStore({
				client: redis,
				prefix: config.getOrThrow<string>('SESSION_FOLDER')
			})
		})
	)

	app.enableCors({
		credentials: true,
		exposeHeaders: ['set-cookie'],
		origin: config.getOrThrow<string>('ALLOWED_ORIGIN')
	})

	await app.listen(config.get<number>('APPLICATION_PORT')!)
	console.log(`Server run on port: http://localhost:${process.env.PORT}`)
}

bootstrap().catch(err => {
	console.error('Failed to start the application:', err)
	process.exit(1)
})
