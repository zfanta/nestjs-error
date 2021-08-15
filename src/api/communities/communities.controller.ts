import { Controller } from '@nestjs/common'
import { CommunitiesService } from './communities.service'

@Controller('api/communities')
export class CommunitiesController {
  constructor (
    private readonly communitiesService: CommunitiesService
  ) {}
}
