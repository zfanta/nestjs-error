import { Test, TestingModule } from '@nestjs/testing'
import { CommunitiesController } from './communities.controller'
import { CommunitiesService } from './communities.service'
import { PrismaService } from '../../prisma/prisma.service'
import { NanoidModule } from '../nanoid/nanoid.module'

describe('CommunitiesController', () => {
  let controller: CommunitiesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NanoidModule],
      controllers: [CommunitiesController],
      providers: [CommunitiesService, PrismaService]
    }).compile()

    controller = module.get<CommunitiesController>(CommunitiesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
