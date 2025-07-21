import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	getHello() {
		return { message: 'Welcome to Expanse-tracker backend!' }
	}
}
