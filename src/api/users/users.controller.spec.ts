import { Test, TestingModule } from '@nestjs/testing'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { PrismaService } from '../../prisma/prisma.service'
import { NanoidModule } from '../nanoid/nanoid.module'

describe('UsersController', () => {
  let controller: UsersController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NanoidModule],
      controllers: [UsersController],
      providers: [UsersService, PrismaService]
    }).compile()

    controller = module.get<UsersController>(UsersController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
