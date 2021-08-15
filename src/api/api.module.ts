import { Module } from '@nestjs/common'
import { ApiService } from './api.service'
import { ApiController } from './api.controller'
import { UsersModule } from './users/users.module'
import { CommunitiesModule } from './communities/communities.module'
import { AdminsModule } from './admins/admins.module'

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [UsersModule, CommunitiesModule, AdminsModule]
})
export class ApiModule {}
