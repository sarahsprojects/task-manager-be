import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class DeleteTaskDto {
  @ApiPropertyOptional({
    example: 'Task is no longer needed',
    type: String,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  reason?: string;
}
