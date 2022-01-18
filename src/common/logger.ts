import path from 'path';
import pino from 'pino';
import { config } from './config';

const { LOGGER_LVL } = config;

const prettySettings = (dirAuth: string) => ({
  destination: path.join(__dirname, dirAuth),
  ignore: 'pid,hostname',
  colorize: false,
  translateTime: 'SYS:dd/mm/yyyy HH:MM:ss',
});

const getLvl = (item: string) => {
  switch (item) {
    case '0':
      return 'fatal';
    case '1':
      return 'error';
    case '2':
      return 'warn';
    case '3':
      return 'info';
    case '4':
      return 'debug';
    case '5':
      return 'trace';
    default:
      return 'info';
  }
};

export const logger = pino({
  transport: {
    targets: [
      {
        level: 'error',
        target: 'pino-pretty',
        options: prettySettings('../logs/errors.log'),
      },
      {
        level: getLvl(LOGGER_LVL),
        target: 'pino-pretty',
        options: prettySettings('../logs/all.log'),
      },
    ],
  },
});
