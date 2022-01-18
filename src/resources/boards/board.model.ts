import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface IBoardColumn {
  id: string;
  title: string;
  order: number;
}

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ type: 'json', nullable: true })
  columns!: IBoardColumn[];
}
