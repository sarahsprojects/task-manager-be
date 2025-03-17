import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskHistoryEntity } from '../entities/task-history.entity';

@Injectable()
export class TaskHistoryRepository {
  constructor(
    @InjectRepository(TaskHistoryEntity)
    private readonly repo: Repository<TaskHistoryEntity>,
  ) {}

  async save(
    taskHistory: Partial<TaskHistoryEntity>,
  ): Promise<TaskHistoryEntity> {
    return this.repo.save(taskHistory);
  }

  async findByTaskId(taskId: string): Promise<TaskHistoryEntity[]> {
    return this.repo.find({
      // Filter by relationship in NextJS
      where: { task: { id: taskId } },
      order: { changedAt: 'DESC' }, // Show latest changes first
    });
  }
}
