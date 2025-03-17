import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { TaskStatus } from '../../../../domain/task';

@Entity('task_history')
export class TaskHistoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: TaskStatus })
  previousStatus: TaskStatus;

  @Column({ type: 'enum', enum: TaskStatus })
  newStatus: TaskStatus;

  @CreateDateColumn()
  changedAt: Date;

  @Column({ type: 'text', nullable: true })
  reason?: string;

  @ManyToOne(() => TaskEntity, (task) => task.history, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'taskId' })
  task: TaskEntity;
}
