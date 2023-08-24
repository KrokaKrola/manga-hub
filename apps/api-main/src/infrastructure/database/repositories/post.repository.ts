import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PostEntity } from '../../../domain/posts/entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PostMapper } from '../mappers/post.mapper';

@Injectable()
export class PostRepository extends Repository<PostEntity> {
    constructor(
        @InjectRepository(PostMapper)
        private readonly repository: Repository<PostEntity>
    ) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
