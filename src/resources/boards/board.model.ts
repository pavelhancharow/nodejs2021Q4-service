import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BoardColumn } from '../column/column.model';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @OneToMany(() => BoardColumn, column => column.id)
  columns!: BoardColumn[];
}
