import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostMapper } from '../database/mappers/post.mapper';
import { PostController } from '../../presentation/controllers/post.controller';
import { PostRepository } from '../database/repositories/post.repository';
import { CreatePostAction } from '../../application/posts/create-post.action';
import { UserRepository } from '../database/repositories/user.repository';
import { UserMapper } from '../database/mappers/user.mapper';
import { GetUserPostsAction } from '../../application/posts/get-user-posts.action';

@Module({
    imports: [TypeOrmModule.forFeature([PostMapper, UserMapper])],
    providers: [
        PostRepository,
        CreatePostAction,
        UserRepository,
        GetUserPostsAction,
    ],
    controllers: [PostController],
})
export class PostModule {}
