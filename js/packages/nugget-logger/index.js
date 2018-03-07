const winston = require('winston');
const { combine, timestamp, printf } = winston.format;

const logger = winston.createLogger({
    format: combine(
        timestamp(),
        printf(info => `${info.timestamp} ${info.level.toUpperCase()} [${info.label}] ${info.message}`)
    ),
    transports: [
        new winston.transports.Console()
    ]
});

/*
 * these are so we can log stuff with a label in the function call
 * inspired by Android's Logcat
 */
logger.e = (label, message) => logger.error(message, { label: label });
logger.w = (label, message) => logger.warn(message, { label: label });
logger.i = (label, message) => logger.info(message, { label: label });
logger.v = (label, message) => logger.verbose(message, { label: label });
logger.d = (label, message) => logger.debug(message, { label: label });
logger.s = (label, message) => logger.silly(message, { label: label });

module.exports = logger;