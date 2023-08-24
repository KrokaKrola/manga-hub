import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MainServiceName } from './config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MainService {
  constructor(@Inject(MainServiceName) private readonly client: ClientProxy) {}

  async login() {
    return lastValueFrom(this.client.send({ cmd: 'login' }, {}));
  }
}
