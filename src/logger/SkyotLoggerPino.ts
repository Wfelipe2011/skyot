import pino from 'pino';

const SkyotLoggerPino = pino({
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

function skyotLogger(message: any | any[]) {
  SkyotLoggerPino.info(message);
}

export { SkyotLoggerPino, skyotLogger };
