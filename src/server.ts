import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import { config } from './common/config';
import { ormconfig } from './common/ormconfig';

const { PORT } = config;

/**
 * Running the server
 *
 * @returns Promise type void
 */
createConnection(ormconfig)
  .then(async () => {
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
