import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/domain/user';

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
}

export class Task {
  @ApiProperty({
    type: String,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  id: string;

  @ApiProperty({
    type: String,
    example: 'Develop API',
  })
  @Expose({ groups: ['me', 'admin'] })
  title: string;

  @ApiProperty({
    type: String,
    example: 'Develop the backend API using NestJS',
    required: false,
  })
  @Expose({ groups: ['me', 'admin'] })
  description?: string | null;

  @ApiProperty({
    enum: TaskStatus,
    example: TaskStatus.PENDING,
  })
  @Expose({ groups: ['me', 'admin'] })
  status: TaskStatus;

  @ApiProperty({
    type: () => User,
    required: false,
  })
  @Expose({ groups: ['admin'] })
  assignedTo?: User | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt?: Date;
}
