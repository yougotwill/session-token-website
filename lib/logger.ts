/* eslint-disable no-console */
import { isProduction } from './env';

class Logger {
  static debugEnabled = !isProduction() && process.env.DEBUG_LOG === 'true';

  private getTimestamp(): string {
    return new Date().toISOString();
  }

  public debug(message: string, ...args: Array<unknown>) {
    if (Logger.debugEnabled) {
      console.debug(`[${this.getTimestamp()}] ${message}`, ...args);
    }
  }
  public info(message: string, ...args: Array<unknown>) {
    console.info(`[${this.getTimestamp()}] ${message}`, ...args);
  }
  public error(message: string, ...args: Array<unknown>) {
    console.error(`[${this.getTimestamp()}] ${message}`, ...args);
  }
}

const log = new Logger();

export { log };
