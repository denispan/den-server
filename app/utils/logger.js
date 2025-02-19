const {createLogger, format, transports} = require('winston');
const path = require('path');
const DailyRotateLog = require('winston-daily-rotate-file');

const {
  combine, timestamp: tsFormat, printf, colorize
} = format;
const {logPath, logLevel} = require('../../config/logger');

const transportOptions = {
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '30d'
};

const logFormat = printf(({
                            level, message, timestamp
                          }) => {
  const logMsg = message;
  return `[${level}] ${timestamp}: ${logMsg}`;
});

const errorLog = path.join(path.resolve(logPath), 'error-%DATE%.log');
const accessLog = path.join(path.resolve(logPath), 'access-%DATE%.log');

const loggerOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    trace: 4,
    debug: 5
  },
  level: logLevel,
  transports: [
    new transports.Console(),
    new DailyRotateLog({filename: path.resolve(errorLog), level: 'error', ...transportOptions}),
    new DailyRotateLog({filename: path.resolve(accessLog), level: 'info', ...transportOptions})
  ],
  format: combine(
    colorize(),
    tsFormat({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    logFormat
  ),
  meta: false,
  colorize: true
};

module.exports = createLogger(loggerOptions);
