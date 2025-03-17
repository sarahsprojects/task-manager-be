import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskEntity } from './infrastructure/persistence/relational/entities/task.entity';
import { TaskHistoryEntity } from './infrastructure/persistence/relational/entities/task-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, TaskHistoryEntity])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
