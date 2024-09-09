import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { JwtService, TokenExpiredError } from '@nestjs/jwt'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private jwt: JwtService) {}

	canActivate(context: ExecutionContext): boolean | Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const result = this.jwt.verify(request.cookies.jwtToken)

		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate())

		console.log('expiresIn: ', +expiresIn)
		console.log(
			'left min ',
			Math.round((result.exp * 1000 - +expiresIn) / 1000 / 60)
		)
		if (result.exp * 1000 - +expiresIn < 0) throw new TokenExpiredError('jwt token is expired', result.exp)
		
		return true
	}
}
