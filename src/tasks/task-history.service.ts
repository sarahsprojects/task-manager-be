import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskHistoryEntity } from './infrastructure/persistence/relational/entities/task-history.entity';

@Injectable()
export class TaskHistoryService {
  constructor(
    @InjectRepository(TaskHistoryEntity)
    private readonly taskHistoryRepository: Repository<TaskHistoryEntity>,
  ) {}

  async getTaskHistory(taskId: string): Promise<TaskHistoryEntity[]> {
    return this.taskHistoryRepository.find({
      // Filter by relationship in NextJS
      where: { task: { id: taskId } },
      order: { changedAt: 'DESC' },
    });
  }
}
