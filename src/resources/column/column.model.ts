import { v4 as uuid } from 'uuid';

export interface IColumn {
  id?: string;
  title: string;
  order: number;
}

export class Column {
  id: string;
  title: string;
  order: number;

  /**
   * Creating an instance of a class Column
   *
   * @param object - a first term type of IColumn
   *
   * @returns Object type of IColumn by default
   */
  constructor({ title, order = 0 }: IColumn) {
    this.id = uuid();
    this.title = title;
    this.order = order;
  }
}
