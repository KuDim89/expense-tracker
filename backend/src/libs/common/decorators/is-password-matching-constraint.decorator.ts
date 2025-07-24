import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator'
import { RegisterDto } from '@/auth/dto/register.dto'

@ValidatorConstraint({ name: 'IsPasswordMatching', async: false })
export class IsPasswordMatchingConstraint
	implements ValidatorConstraintInterface
{
	public validate(confirmPassword: string, args: ValidationArguments) {
		const obj = args.object as RegisterDto
		return obj.password === confirmPassword
	}

	public defaultMessage(validationArguments: ValidationArguments) {
		return `Password and confirmation do not match.`;
	}
}
