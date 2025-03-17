import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { TaskStatus } from '../domain/task';

export class CreateTaskDto {
  @ApiProperty({ example: 'Finish NestJS API', type: String })
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    example: 'Complete all API endpoints for the project',
    type: String,
    required: false,
  })
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'pending', enum: TaskStatus })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
