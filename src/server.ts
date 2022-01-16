import path from 'path';
import { createConnection } from 'typeorm';
import app from './app';
import config from './common/config';

const {
  PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = config;

/**
 * Running the server
 *
 * @returns Promise type void
 */
createConnection({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: +POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [path.join(__dirname, '/**/*.model.ts')],
  synchronize: true,
  migrationsRun: true,
  migrations: [path.join(__dirname, '/migrations/**/*.ts')]
})
  .then(() => {
    app.listen(PORT, '0.0.0.0', (err: Error | null): void => {
      if (err) throw new Error(err.message);
      process.stdout.write(
        `Server is running on PORT: \x1b[32m${PORT}\x1b[0m\n`
      );
    });
  })
  .catch((err: Error) => {
    app.log.error(err);
    process.exit(1);
  });
