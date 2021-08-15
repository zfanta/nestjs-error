import { Test, TestingModule } from '@nestjs/testing'
import { CommunitiesService } from './communities.service'
import { PrismaService } from '../../prisma/prisma.service'
import { NanoidModule } from '../nanoid/nanoid.module'

describe('CommunitiesService', () => {
  let service: CommunitiesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NanoidModule],
      providers: [CommunitiesService, PrismaService]
    }).compile()

    service = module.get<CommunitiesService>(CommunitiesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
