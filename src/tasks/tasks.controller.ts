import {
  Controller,
  Delete,
  Param,
  HttpCode,
  Patch,
  Body,
  Post,
  HttpStatus,
  Query,
  Get,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { TaskEntity } from './infrastructure/persistence/relational/entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { QueryTasksDto } from './dto/query-tasks.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('tasks') // ✅ Groups endpoints under 'tasks' in Swagger
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' }) // ✅ Adds Swagger docs
  @ApiResponse({
    status: 201,
    description: 'Task created successfully',
    type: TaskEntity,
  })
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by ID' })
  @HttpCode(HttpStatus.NO_CONTENT) // Return 204 No Content
  async deleteTask(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  async getTasks(@Query() query: QueryTasksDto) {
    return this.tasksService.getTasks(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by ID' })
  @ApiResponse({
    status: 200,
    description: 'Task retrieved successfully',
    type: TaskEntity,
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async getTaskById(@Param('id') id: string): Promise<TaskEntity> {
    return this.tasksService.getTaskById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task by ID' })
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Get(':id/history')
  @ApiOperation({ summary: 'Get task history by ID' })
  async getTaskHistory(@Param('id') id: string) {
    return this.tasksService.getTaskHistory(id);
  }
}
