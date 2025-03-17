import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskEntity } from './infrastructure/persistence/relational/entities/task.entity';
import { TaskHistoryModule } from './task-history.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity]),
    TaskHistoryModule,
  ],
  controllers: [TasksController],
  providers: [TasksService], 
  exports: [TasksService],
})
export class TasksModule {}
