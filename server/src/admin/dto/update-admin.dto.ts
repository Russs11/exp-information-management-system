import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './createUser.dto'

export class UpdateAdminDto extends PartialType(CreateUserDto) {}
