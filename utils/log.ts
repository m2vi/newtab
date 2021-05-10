import { isDevelopment } from './constants';

class log {
  do(query: string) {
    if (isDevelopment) {
      console.log(query);
    }
  }

  error(query: string) {
    if (isDevelopment) {
      console.log(query);
    }
  }
}

export default new log();
