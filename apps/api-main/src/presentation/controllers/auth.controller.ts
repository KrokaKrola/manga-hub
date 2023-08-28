import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandLoginRoute } from '@app/message-routes';
import { LoginUserAction } from '../../application/users/login-user.action';
import { LoginUserRequest } from '../requests/login-user.request';

@Controller()
export class AuthController {
  constructor(private readonly loginUserAction: LoginUserAction) {}

  @MessagePattern(CommandLoginRoute)
  login(@Payload() payload: LoginUserRequest) {
    return this.loginUserAction.execute(payload);
  }
}
