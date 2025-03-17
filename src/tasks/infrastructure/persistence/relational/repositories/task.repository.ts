import { Injectable } from '@nestjs/common';
import { Repository, IsNull } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from '../entities/task.entity';

@Injectable()
export class TaskRepository {
  constructor(
    @InjectRepository(TaskEntity) private readonly repo: Repository<TaskEntity>,
  ) {}

  async findAll() {
    return this.repo.find({ where: { deletedAt: IsNull() } }); // Fetch only non-deleted tasks
  }

  async findById(id: string) {
    return this.repo.findOne({ where: { id, deletedAt: IsNull() } });
  }

  async softDelete(id: string) {
    return this.repo.update(id, { deletedAt: new Date() }); // Soft delete by setting a timestamp
  }
}
