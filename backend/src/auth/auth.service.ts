import { ConflictException, Injectable } from '@nestjs/common'
import { RegisterDto } from '@/auth/dto/register.dto'
import { UserService } from '@/user/user.service'
import { AuthMethod } from '@prisma/__generated__'

@Injectable()
export class AuthService {
	public constructor(private readonly userService: UserService) {}

	public async register(dto: RegisterDto) {
		const isExists = await this.userService.findByEmail(dto.email)

		if (isExists) {
			throw new ConflictException(
				'Registration failed. User with this password already exists. Please use another email or log in'
			)
		}

		const newUser = await this.userService.create(
			dto.email,
			dto.password,
			dto.name,
			'',
			AuthMethod.CREDENTIALS,
            false
		)

        return newUser;
	}

	public async login() {}

	public async logout() {}

	private async saveSession() {}
}
