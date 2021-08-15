import { Injectable } from '@nestjs/common'
import { CommunitiesService } from '../communities/communities.service'
import { UsersService } from '../users/users.service'

@Injectable()
export class AdminsService {
  constructor (
    private readonly communitiesService: CommunitiesService,
    private readonly usersService: UsersService
  ) {}
}
