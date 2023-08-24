import { Controller, Post } from '@nestjs/common';
import { MainService } from '../../../infrastructure/external/main/main.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly mainService: MainService) {}

  @Post('login')
  async login() {
    return await this.mainService.login();
  }
}
