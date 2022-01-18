import dotenv from 'dotenv';
import path from 'path';

interface ConfigI {
  PORT: number;
  NODE_ENV: string;
  MONGO_CONNECTION_STRING: string;
  JWT_SECRET_KEY: string;
  AUTH_MODE: boolean;
  LOGGER_LVL: string;
  POSTGRES_PORT: number;
  POSTGRES_HOST: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
}

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const config: ConfigI = {
  PORT: process.env.PORT ? +process.env.PORT : 4000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_CONNECTION_STRING:
    process.env.MONGO_CONNECTION_STRING || 'your-mongo-db-connection-string',
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'secret-key',
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  LOGGER_LVL: process.env.LOGGER_LVL || '',
  POSTGRES_PORT: process.env.POSTGRES_PORT ? +process.env.POSTGRES_PORT : 5432,
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'postgres',
  POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
  POSTGRES_DB: process.env.POSTGRES_DB || 'postgres',
};
