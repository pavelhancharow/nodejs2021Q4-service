import dotenv from 'dotenv';
import path from 'path';

interface ConfigI {
  PORT: string;
  NODE_ENV: string;
  MONGO_CONNECTION_STRING: string;
  JWT_SECRET_KEY: string;
  AUTH_MODE: boolean;
  LOGGER_LVL: string;
  POSTGRES_PORT: string;
  POSTGRES_HOST: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
}

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export default <ConfigI>{
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  LOGGER_LVL: process.env.LOGGER_LVL,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_DB: process.env.POSTGRES_DB,
};
