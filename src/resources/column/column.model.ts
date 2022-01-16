import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BoardColumn {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;
}
