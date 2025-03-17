import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskEntity } from './infrastructure/persistence/relational/entities/task.entity';
import { TaskHistoryEntity } from './infrastructure/persistence/relational/entities/task-history.entity';
import { TaskHistoryService } from './task-history.service'; // ✅ Import TaskHistoryService
import { TaskHistoryController } from './task-history.controller'; // ✅ Import TaskHistoryController

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, TaskHistoryEntity])], // ✅ Register entities
  controllers: [TasksController, TaskHistoryController], // ✅ Include TaskHistoryController
  providers: [TasksService, TaskHistoryService], // ✅ Include TaskHistoryService
  exports: [TasksService, TaskHistoryService], // ✅ Export services if needed elsewhere
})
export class TasksModule {}
