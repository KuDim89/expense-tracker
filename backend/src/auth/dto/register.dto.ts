import { IsEmail, IsNotEmpty, IsString, MinLength, Validate } from 'class-validator'
import { IsPasswordMatchingConstraint} from 'src/libs/common/decorators/is-password-matching-constraint.decorator'

export class RegisterDto {
	@IsString({ message: 'Name should be a string.' })
	@IsNotEmpty({ message: 'Name is required.' })
	name: string

	@IsString({ message: 'Email should be a string.' })
	@IsEmail({}, { message: 'Incorrect email format.' })
	@IsNotEmpty({ message: 'Name is required.' })
	email: string

	@IsString({ message: 'Password should be a string.' })
	@IsNotEmpty({ message: 'Password is required.' })
	@MinLength(6, { message: 'Password should be at least 6 characters.' })
	password: string

	@IsString({ message: 'Confirm password should be a string.' })
	@IsNotEmpty({ message: 'Confirm password is required.' })
	@MinLength(6, { message: 'Confirm password should be at least 6 characters.' })
	@Validate(IsPasswordMatchingConstraint, { message: 'Passwords don\'t match' })
	confirmPassword: string
}
