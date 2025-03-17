import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { TaskEntity } from './infrastructure/persistence/relational/entities/task.entity';
import { TaskHistoryEntity } from './infrastructure/persistence/relational/entities/task-history.entity';
import { QueryTasksDto } from './dto/query-tasks.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,

    @InjectRepository(TaskHistoryEntity)
    private readonly taskHistoryRepository: Repository<TaskHistoryEntity>,
  ) {}

  async deleteTask(id: string): Promise<void> {
    // Use IsNull() instead of null
    const task = await this.taskRepository.findOne({
      where: { id, deletedAt: IsNull() },
    });

    if (!task) throw new NotFoundException('Task not found');

    await this.taskRepository.update(id, { deletedAt: new Date() });
  }

  async getTasks(query: QueryTasksDto) {
    const { status, sortBy = 'createdAt', page = 1, limit = 10 } = query;
    const whereClause = status ? { status } : {};

    return this.taskRepository.find({
      where: whereClause,
      order: { [sortBy]: 'ASC' },
      take: limit,
      skip: (page - 1) * limit,
    });
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto) {
    // Use transaction to ensure database consistency
    return this.taskRepository.manager.transaction(
      async (transactionalEntityManager) => {
        
        const task = await transactionalEntityManager.findOne(TaskEntity, {
          where: { id, deletedAt: IsNull() },
        });

        if (!task) throw new NotFoundException('Task not found');

        // If status is changing, save history record first
        if (updateTaskDto.status && updateTaskDto.status !== task.status) {
          const taskHistory = new TaskHistoryEntity();
          taskHistory.previousStatus = task.status;
          taskHistory.newStatus = updateTaskDto.status;
          taskHistory.changedAt = new Date();
          taskHistory.reason = 'Updated status via API';
          taskHistory.task = task;

          await transactionalEntityManager.save(taskHistory);
        }

        const updatedData = {
          ...updateTaskDto,
          updatedAt: new Date(),
        };

        await transactionalEntityManager.update(TaskEntity, id, updatedData);
        return transactionalEntityManager.findOne(TaskEntity, {
          where: { id },
        });
      },
    );
  }

  async getTaskHistory(taskId: string) {
    return this.taskHistoryRepository.find({
      // Filter by relationship in NextJS
      where: { task: { id: taskId } },
      order: { changedAt: 'DESC' },
    });
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const newTask = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(newTask);
  }

  async getTaskById(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }
}
