import { isDevelopment } from './constants';

class lowkey {
  log(query: string) {
    if (isDevelopment) {
      console.log(`%c${query}`, 'color: white');
    }
  }
}

export default new lowkey();
