import emitter from '../utils/emitter';
import dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ManagerStore {
  constructor() {
    this.emitter = emitter;

    this.attrs = {
      rate: ''
    };

    this.act = this.act.bind(this);

    this.dispatcher = dispatcher;
    this.dispatcher.register(this.act);
  }

  act(action) {
    let act = this[action.type] || (() => {});
    act.call(this, action.data);
  }

  sanitizeRate(rate) {
    rate = String(rate).replace(/^0+|\D/g, '');
    return rate;
  }

  changeRate({rate}) {
    rate = this.sanitizeRate(rate);
    this.attrs.rate = rate;
    this.emitter.emit({rate});
  }

  on(callback) {
    this.emitter.addListener(callback);
  }

  off(callback) {
    this.emitter.removeListener(callback);
  }
}

export default new ManagerStore();