import { forwardRef, Module } from '@nestjs/common'
import { AdminsService } from './admins.service'
import { AdminsController } from './admins.controller'
import { CommunitiesModule } from '../communities/communities.module'
import { UsersModule } from '../users/users.module'

@Module({
  imports: [forwardRef(() => CommunitiesModule), forwardRef(() => UsersModule)],
  controllers: [AdminsController],
  providers: [AdminsService],
  exports: [AdminsService]
})
export class AdminsModule {}
