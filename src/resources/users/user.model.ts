import { v4 as uuid } from 'uuid';

export interface IUser {
  id?: string,
  name: string;
  login: string;
  password?: string;
}

export class User implements IUser {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor({ name = 'USER', login = 'user', password = 'P@55w0rd' }: IUser) {
    this.id = uuid();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
