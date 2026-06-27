import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { Content } from './entities/content.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // <-- The Lock

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  // Requirement 3D: Routes can only be accessed after authentication
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.contentService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() contentData: Partial<Content>) {
    return this.contentService.create(contentData);
  }
}
