import { Dispatcher } from 'flux';

class PieDispatcher extends Dispatcher {
  dispatch(...args) {
    setTimeout(() => super.dispatch(...args));
  }
}

export default new PieDispatcher();