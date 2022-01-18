import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../boards/board.model';

export interface IBoardColumn {
  id: string;
  title: string;
  order: number;
}

@Entity({ name: 'board_column' })
export class BoardColumn {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  title!: string;

  @Column('int')
  order!: number;

  @ManyToOne(() => Board, (board) => board.columns, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  boardId?: string;
}
