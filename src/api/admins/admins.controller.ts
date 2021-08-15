import { Controller } from '@nestjs/common'
import { AdminsService } from './admins.service'
import { CommunitiesService } from '../communities/communities.service'

@Controller('api/admins')
export class AdminsController {
  constructor (
    private readonly adminsService: AdminsService,
    private readonly communitiesService: CommunitiesService
  ) {}
}
