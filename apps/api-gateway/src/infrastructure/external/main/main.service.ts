import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MainServiceName } from './config';
import { lastValueFrom } from 'rxjs';
import { LoginUserRequest } from '../../../presentation/controllers/requests/login-user.request';
import {
  CommandCreatePost,
  CommandGetUserPosts,
  CommandLoginRoute,
  CommandUpdateAccount,
} from '@app/message-routes';

@Injectable()
export class MainService {
  constructor(@Inject(MainServiceName) private readonly client: ClientProxy) {}

  async login(body: LoginUserRequest) {
    return await lastValueFrom(this.client.send(CommandLoginRoute, body));
  }

  async createPost() {
    return await lastValueFrom(this.client.send(CommandCreatePost, {}));
  }

  async getUserPosts() {
    return await lastValueFrom(this.client.send(CommandGetUserPosts, {}));
  }

  async updateAccount(body: any) {
    return await lastValueFrom(this.client.send(CommandUpdateAccount, body));
  }
}
