import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { TaskHistoryService } from './task-history.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TaskHistoryEntity } from './infrastructure/persistence/relational/entities/task-history.entity';

@ApiTags('task-history') // ✅ Groups endpoints under 'task-history' in Swagger
@Controller('task-history')
export class TaskHistoryController {
  constructor(private readonly taskHistoryService: TaskHistoryService) {}

  @Get(':taskId')
  @ApiOperation({ summary: 'Get task history by task ID' })
  @ApiResponse({
    status: 200,
    description: 'Task history retrieved successfully',
    type: [TaskHistoryEntity],
  })
  @ApiResponse({ status: 404, description: 'Task not found or has no history' })
  async findOne(@Param('taskId') taskId: string) {
    return this.taskHistoryService.getTaskHistory(taskId);
  }
}
