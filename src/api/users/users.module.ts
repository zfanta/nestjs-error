import { forwardRef, Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { CommunitiesModule } from '../communities/communities.module'

@Module({
  imports: [forwardRef(() => CommunitiesModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
