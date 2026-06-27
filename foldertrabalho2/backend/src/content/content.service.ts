import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  async findAll(): Promise<Content[]> {
    // Fulfills Requirement 2: Ordering
    return await this.contentRepository.find({
      order: {
        display_order: 'ASC',
      },
    });
  }

  async create(data: Partial<Content>): Promise<Content> {
    const newContent = this.contentRepository.create(data);
    return await this.contentRepository.save(newContent);
  }
}
