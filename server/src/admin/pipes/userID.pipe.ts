import { PipeTransform, Injectable, ArgumentMetadata, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class ParseCookiePipe implements PipeTransform {
	constructor(private jwt: JwtService) {}
	transform(value: string, metadata: ArgumentMetadata) {
		try {
			const result = this.jwt.verify(value)

			result.last = result.exp * 1000 - Date.now()
			return result
		} catch (error) {
			throw new UnauthorizedException()
		}

	}
}
