import {
	CanActivate,
	ExecutionContext,
	Injectable,
	ForbiddenException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AdminGuard implements CanActivate {
	constructor(private jwt: JwtService) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		try {
			const { role } = this.jwt.verify(request.cookies.jwtToken)
			if (!role || role !== 'admin' ) throw new ForbiddenException('not admin')
			return true
		} catch (error) {
			throw new ForbiddenException('not admin')
		}
	}
}
