import {
  ClientProviderOptions,
  ClientsModuleAsyncOptions,
  Transport,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

export const MainServiceName = 'main-api';

export const MainServiceClientOptions: ClientsModuleAsyncOptions = {
  clients: [
    {
      inject: [ConfigService],
      name: MainServiceName,
      useFactory: (configService: ConfigService): ClientProviderOptions => {
        return {
          name: MainServiceName,
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('CLOUDAMQP_URL')],
            queue: MainServiceName,
            queueOptions: {
              durable: false,
            },
            socketOptions: {
              heartbeatIntervalInSeconds: 60,
              reconnectTimeInSeconds: 10,
            },
          },
        };
      },
    },
  ],
};
