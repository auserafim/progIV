import { Test, TestingModule } from '@nestjs/testing';
import { ContentService } from './content.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Content } from './entities/content.entity';

describe('ContentService', () => {
  let service: ContentService;

  const mockContentRepository = {
    find: jest.fn().mockResolvedValue([]),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContentService,
        {
          provide: getRepositoryToken(Content),
          useValue: mockContentRepository,
        },
      ],
    }).compile();

    service = module.get<ContentService>(ContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call repository find method when findAll is executed', async () => {
    await service.findAll();
    expect(mockContentRepository.find).toHaveBeenCalled();
  });
});