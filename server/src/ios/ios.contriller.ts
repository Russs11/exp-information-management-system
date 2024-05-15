import { Controller } from '@nestjs/common'
import { IOSService } from './ios.service'

@Controller('ios')
export class IOSController {
	constructor(private readonly iosService: IOSService) {}
}
