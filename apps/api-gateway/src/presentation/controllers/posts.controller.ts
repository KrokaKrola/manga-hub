import { Controller, Get, Post } from '@nestjs/common';
import { MainService } from '../../infrastructure/external/main/main.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly mainService: MainService) {}

  @Post()
  async createPost() {
    return await this.mainService.createPost();
  }

  @Get()
  async getUserPosts() {
    return await this.mainService.getUserPosts();
  }
}
