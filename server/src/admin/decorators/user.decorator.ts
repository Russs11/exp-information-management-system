import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

class EncryptJwt {
	constructor(private jwt: JwtService) {}

	encryptJwtString(jwtString: string): string {
		const { id } = this.jwt.verify(jwtString)
		return id
	}
}

export const CookiesCurrentUser = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const { cookies } = ctx.switchToHttp().getRequest()

		const encryptJwt = new EncryptJwt()

		const jwt = new JwtService({
			secret: 'D*IRNF(@#*)'
		}).verify(cookies.jwtToken)
		return jwt
	}
)
