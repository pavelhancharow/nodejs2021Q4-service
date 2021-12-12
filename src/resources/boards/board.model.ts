import { v4 as uuid } from 'uuid';
import { Column, IColumn } from '../column/column.model';

export interface IBoard {
  id?: string;
  title: string;
  columns: IColumn[];
}

export class Board {
  id: string;
  title: string;
  columns: IColumn[];

  constructor({ title, columns = [] }: IBoard) {
    this.id = uuid();
    this.title = title;
    this.columns = Board.setColumns(columns);
  }

  static setColumns(array: IColumn[]) {
    return array.map((cl) => new Column(cl));
  }
}
