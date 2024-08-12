import type { User } from '../../../prisma/generated/client'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const IsAdmin = createParamDecorator(
	(data: keyof User, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user = request.user
		console.log('IsAdmin user: ', user)
		return data ? user[data] : user
	}
)
