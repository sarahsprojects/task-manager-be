import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../domain/task';

export class UpdateTaskHistoryDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  taskId: string;

  @ApiProperty({ example: 'pending', enum: TaskStatus })
  @IsEnum(TaskStatus)
  previousStatus: TaskStatus;

  @ApiProperty({ example: 'in-progress', enum: TaskStatus })
  @IsEnum(TaskStatus)
  newStatus: TaskStatus;

  @ApiProperty({ example: 'Updated due to user request', type: String })
  @IsString()
  reason: string;
}
