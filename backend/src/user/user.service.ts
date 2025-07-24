import { Injectable, NotFoundException } from '@nestjs/common'
import { AuthMethod, User } from '@prisma/__generated__'
import { hash } from 'argon2'

import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class UserService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async findById(id: string): Promise<User> {
		const user: User = await this.prismaService.user.findUnique({
			include: { accounts: true },
			where: { id }
		})

		if (!user) {
			throw new NotFoundException(`User with id: "${id}", not found`)
		}

		return user
	}

	public async findByEmail(email: string): Promise<User> {
		const user: User = await this.prismaService.user.findUnique({
			include: { accounts: true },
			where: { email }
		})

		return user
	}

	public async create(
		email: string,
		password: string,
		displayName: string,
		picture: string,
		method: AuthMethod,
		isVerified: boolean
	): Promise<User> {
		const user: User = await this.prismaService.user.create({
			data: {
				displayName,
				email,
				isVerified,
				method,
				password: password ? await hash(password) : '',
				picture
			},
			include: { accounts: true }
		})

		return user
	}
}
