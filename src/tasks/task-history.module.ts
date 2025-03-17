import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskHistoryEntity } from './infrastructure/persistence/relational/entities/task-history.entity';
import { TaskHistoryService } from './task-history.service';
import { TaskHistoryController } from './task-history.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TaskHistoryEntity])], 
  controllers: [TaskHistoryController], 
  providers: [TaskHistoryService], 
  exports: [TaskHistoryService, TypeOrmModule],
})
export class TaskHistoryModule {}