import { v4 as uuid } from 'uuid';

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId?: string | null;
  columnId: string | null;
}

export class Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;

  /**
   * Creating an instance of a class Task
   *
   * @param object - a first term type of ITask
   *
   * @returns Object type of ITask by default
   */
  constructor({
    title,
    order = 0,
    description,
    userId = null,
    columnId = null,
    boardId = null,
  }: ITask) {
    this.id = uuid();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
