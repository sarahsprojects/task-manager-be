import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskHistoryEntity } from './infrastructure/persistence/relational/entities/task-history.entity';
import { TaskHistoryService } from './task-history.service';
import { TaskHistoryController } from './task-history.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TaskHistoryEntity])], // ✅ Registers TaskHistoryEntity
  controllers: [TaskHistoryController], // ✅ Exposes task history endpoints
  providers: [TaskHistoryService], // ✅ Business logic for task history
  exports: [TaskHistoryService], // ✅ Allows other modules to use this service
})
export class TaskHistoryModule {}
