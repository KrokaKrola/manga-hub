import { Body, Controller, Post } from '@nestjs/common';
import { MainService } from '../../../infrastructure/external/main/main.service';
import { LoginUserRequest } from '../requests/login-user.request';

@Controller('auth')
export class AuthController {
    constructor(private readonly mainService: MainService) {}

    @Post('login')
    async login(@Body() body: LoginUserRequest) {
        return await this.mainService.login(body);
    }
}
