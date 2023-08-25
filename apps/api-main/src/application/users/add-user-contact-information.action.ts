import { Injectable } from '@nestjs/common';
import { UserContactsRepository } from '../../infrastructure/database/repositories/user-contacts.repository';
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';
import { UserContactsEntity } from '../../domain/users/entities/user-contacts.entity';

@Injectable()
export class AddUserContactInformationAction {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly userContactsRepository: UserContactsRepository
    ) {}

    public async execute(payload: any) {
        const user = await this.userRepository.findOne({
            where: {
                id: payload.id,
            },
            relations: ['contacts'],
        });

        if (!user) {
            throw new Error('User not found');
        }

        let userContacts: UserContactsEntity;

        if (user.contacts) {
            user.contacts.phone = payload.phone;
            user.contacts.country = payload.country;
            userContacts = user.contacts;
        } else {
            userContacts = new UserContactsEntity(
                user,
                payload.phone,
                payload.country
            );
        }

        await this.userContactsRepository.save(userContacts);

        return {
            ...user,
            contacts: {
                phone: userContacts.phone,
                country: userContacts.country,
            },
        };
    }
}
