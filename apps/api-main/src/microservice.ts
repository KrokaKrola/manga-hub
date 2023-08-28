import {
  ClientProviderOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';

export const MainServiceName = 'main-api';

export const MainServiceClientOptions: ClientProviderOptions = {
  name: MainServiceName,
  transport: Transport.RMQ,
  options: {
    urls: [process.env.CLOUDAMQP_URL],
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
