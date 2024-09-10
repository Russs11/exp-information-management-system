import {
	CanActivate,
	ExecutionContext,
	HttpException,
	HttpStatus,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private jwt: JwtService) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		try {
			this.jwt.verify(request.cookies.jwtToken)
			return true
		} catch (error) {
			throw new UnauthorizedException()
		}
	}
}
