import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../infrastructure/database/repositories/post.repository';
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';

@Injectable()
export class GetUserPostsAction {
    constructor(
        private readonly postsRepository: PostRepository,
        private readonly userRepository: UserRepository
    ) {}

    async execute() {
        return this.userRepository.find({
            where: {
                id: 1,
            },
            relations: ['posts'],
        });
    }
}
