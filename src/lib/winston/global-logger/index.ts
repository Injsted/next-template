import { createLogger, format, transports } from 'winston';

const serviceName = 'next-template'; // Replace with your actual service name

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json(), // Use JSON format
    format(info => {
      info.service = serviceName;
      return info;
    })() // Add service name to log
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(), // Colorize output in the console for readability
        format.printf(info => {
          // Customize console output format
          return `${info.timestamp} [${info.level}] [${info.service}]: ${info.message} ${info.stack || ''}`;
        })
      ),
    }),
  ],
});

export default logger;
