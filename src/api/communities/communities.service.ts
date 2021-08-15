import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { AdminsService } from '../admins/admins.service'

@Injectable()
export class CommunitiesService {
  constructor (
    private readonly usersService: UsersService,
    private readonly adminsService: AdminsService
  ) {}
}
