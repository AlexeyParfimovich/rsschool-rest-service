import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import ormconfig from "./ormconfig";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from "./resources/users/users.module";
import { TasksModule } from "./resources/tasks/tasks.module";
import { BoardsModule } from "./resources/boards/boards.module";
import { httpRequestLogger } from "./errors/handlers";

@Module({
  controllers: [],
  providers: [],
  imports: [
    TypeOrmModule.forRoot(<TypeOrmModuleOptions>ormconfig),
    AuthModule,
    UsersModule,
    TasksModule,
    BoardsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(httpRequestLogger)
      .forRoutes('*');
  }};