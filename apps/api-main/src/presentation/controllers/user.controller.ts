import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandUpdateAccount } from '@app/message-routes';

@Controller()
export class UserController {
  constructor() {}

  @MessagePattern(CommandUpdateAccount)
  async updateAccount(@Payload() body: any) {
    return null;
  }
}
