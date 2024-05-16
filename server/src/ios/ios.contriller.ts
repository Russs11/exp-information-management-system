import { Controller } from '@nestjs/common'
import { InspectionOfSceneService } from './ios.service'

@Controller('ios')
export class InspectionOfSceneController {
	constructor(
		private readonly inspectionOfSceneService: InspectionOfSceneService
	) {}
}
