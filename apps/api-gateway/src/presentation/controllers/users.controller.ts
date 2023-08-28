import { Body, Controller, Patch } from '@nestjs/common';
import { MainService } from '../../infrastructure/external/main/main.service';

@Controller('users')
export class UsersController {
    constructor(private readonly mainService: MainService) {}

    @Patch('/account')
    async updateAccount(@Body() body: any) {
        return await this.mainService.updateAccount(body);
    }
}
