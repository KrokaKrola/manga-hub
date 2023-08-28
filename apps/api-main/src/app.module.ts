import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UserModule } from './infrastructure/ioc/user.module';
import typeorm from './infrastructure/database/config';
import { PostModule } from './infrastructure/ioc/post.module';

@Module({
    imports: [
        DatabaseModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [typeorm],
        }),
        UserModule,
        PostModule,
    ],
    controllers: [],
})
export class AppModule {}
