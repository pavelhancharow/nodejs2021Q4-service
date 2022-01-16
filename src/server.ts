import app from './app';
import config from './common/config';

const { PORT, HTTP_ADDRESS, HTTP_ADDRESS_DEF } = config;

/**
 * Running the server
 *
 * @returns Promise type void
 */
const start = async (): Promise<void> => {
  try {
    app.listen(
      PORT,
      HTTP_ADDRESS_DEF || HTTP_ADDRESS,
      (err: Error | null): void => {
        if (err) throw new Error(err.message);
        process.stdout.write(
          `Server is running on PORT: \x1b[32m${PORT}\x1b[0m\n`
        );
      });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
