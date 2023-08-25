import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandUpdateAccount } from '@manga-hub/message-routes';
import { AddUserContactInformationAction } from '../../application/users/add-user-contact-information.action';

@Controller()
export class UserController {
    constructor(
        private readonly addUserContactInformation: AddUserContactInformationAction
    ) {}

    @MessagePattern(CommandUpdateAccount)
    async updateAccount(@Payload() body: any) {
        return this.addUserContactInformation.execute(body);
    }
}
