import { UseGuards } from '@nestjs/common'
import { AdminGuard } from '../guards/admin.guard'

export const IsAdmin = () => UseGuards(AdminGuard)
