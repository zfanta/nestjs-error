import { Controller } from '@nestjs/common'
import { UsersService } from './users.service'
import { CommunitiesService } from '../communities/communities.service'

@Controller('api/users')
export class UsersController {
  constructor (
    private readonly usersService: UsersService,
    private readonly communitiesService: CommunitiesService
  ) {}
}
