import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

import { AuthModule } from '../../auth/auth.module';
import { BoardsModule } from '../boards/boards.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    TypeOrmModule.forFeature([Task]),
    forwardRef(() => AuthModule),
    forwardRef(() => BoardsModule),
  ],
  exports: [
    TasksService,
  ]
})
export class TasksModule {}