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

  /**
   * Creating an instance of a class Board
   *
   * @param object - a first term type of IBoard
   *
   * @returns Object type of IBoard by default
   */
  constructor({ title, columns = [] }: IBoard) {
    this.id = uuid();
    this.title = title;
    this.columns = Board.setColumns(columns);
  }

  /**
   * Returns the array of objects type of IColumn
   *
   * @param array - a first term array of objects type of IColumn
   * @returns Array of objects type of IColumn
   */
  static setColumns(array: IColumn[]) {
    return array.map((cl) => new Column(cl));
  }
}
