import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from '../boards/board.model';
import { User } from '../users/user.model';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column('int')
  order!: number;

  @Column()
  description!: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'userId' })
  userId?: string | null;

  @ManyToOne(() => Board, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'boardId' })
  boardId?: string | null;

  @Column('varchar', { nullable: true })
  columnId!: string;
}
