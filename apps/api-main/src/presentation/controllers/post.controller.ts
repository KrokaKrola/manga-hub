import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreatePostAction } from '../../application/posts/create-post.action';
import { CommandCreatePost, CommandGetUserPosts } from '@app/message-routes';
import { GetUserPostsAction } from '../../application/posts/get-user-posts.action';

@Controller()
export class PostController {
  constructor(
    private readonly createPostAction: CreatePostAction,
    private readonly getUserPostsAction: GetUserPostsAction,
  ) {}

  @MessagePattern(CommandCreatePost)
  async createPost() {
    return await this.createPostAction.execute();
  }

  @MessagePattern(CommandGetUserPosts)
  async getUserPosts() {
    return await this.getUserPostsAction.execute();
  }
}
