import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../infrastructure/database/repositories/post.repository';
import { PostEntity } from '../../domain/posts/entities/post.entity';
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';

@Injectable()
export class CreatePostAction {
    constructor(
        private readonly postsRepository: PostRepository,
        private readonly userRepository: UserRepository
    ) {}

    async execute() {
        const user = await this.userRepository.findOne({ where: { id: 1 } });
        const newPost = new PostEntity('Post', 'Post description', user);

        const post = await this.postsRepository.save(newPost);

        return {
            name: post.name,
            description: post.description,
            id: post.id,
        };
    }
}
