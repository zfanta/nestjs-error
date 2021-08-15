import { forwardRef, Module } from '@nestjs/common'
import { CommunitiesService } from './communities.service'
import { CommunitiesController } from './communities.controller'
import { UsersModule } from '../users/users.module'
import { AdminsModule } from '../admins/admins.module'

@Module({
  imports: [forwardRef(() => UsersModule), forwardRef(() => AdminsModule)],
  controllers: [CommunitiesController],
  providers: [CommunitiesService],
  exports: [CommunitiesService]
})
export class CommunitiesModule {}
