import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BoardColumn } from '../column/column.model';

@Entity({ name: 'board' })
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @OneToMany(() => BoardColumn, (column) => column.boardId, {
    eager: true,
    cascade: true,
  })
  columns?: BoardColumn[];
}
