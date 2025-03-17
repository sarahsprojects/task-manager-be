import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Task, TaskStatus } from './task';

export class TaskHistory {
  @ApiProperty({
    type: String,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  id: string;

  @ApiProperty({
    type: () => Task,
  })
  @Expose({ groups: ['admin'] })
  task: Task;

  @ApiProperty({
    enum: TaskStatus,
    example: TaskStatus.PENDING,
  })
  previousStatus: TaskStatus;

  @ApiProperty({
    enum: TaskStatus,
    example: TaskStatus.IN_PROGRESS,
  })
  newStatus: TaskStatus;

  @ApiProperty({
    type: String,
    example: 'User started working on the task',
    required: false,
  })
  reason?: string;

  @ApiProperty()
  changedAt: Date;
}
