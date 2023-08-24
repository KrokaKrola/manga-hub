import { ConflictException } from '@nestjs/common';

export class UserExistsException extends ConflictException {
    constructor() {
        super({ message: 'User already exists' });
    }
}
