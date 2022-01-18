import path from 'path';
import { ConnectionOptions } from 'typeorm';
import { config } from './config';

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = config;

export const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [path.join(__dirname, '../**/*.model.ts')],
  synchronize: true,
  migrationsRun: true,
  migrations: [path.join(__dirname, '../migrations/**/*.ts')],
};
