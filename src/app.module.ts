import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from "./resources/users/user.entity";
import { UsersModule } from "./resources/users/users.module";
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [
    // AppController,
  ],
  providers: [
    // AppService,
  ],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env["POSTGRES_HOST"] ?? 'localhost',
      port: Number(process.env["POSTGRES_PORT"]) ?? 5432,
      database: process.env["POSTGRES_DB"] ?? 'postgres',
      username: process.env["POSTGRES_USER"] ?? 'postgres',
      password: process.env["POSTGRES_PASSWORD"] ?? 'postgres',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {};