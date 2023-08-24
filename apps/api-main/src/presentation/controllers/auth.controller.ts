import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  @MessagePattern({ cmd: 'login' })
  login() {
    return { message: 'Hello World!' };
  }
}
