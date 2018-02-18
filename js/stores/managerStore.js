import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import ActionTypes from '../constants';

const CHANGE = 'CHANGE';

class ManagerStore {
  constructor() {
    this.emitter = new EventEmitter();

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
    this.emitter.emit(CHANGE, {rate});
  }

  on(callback) {
    this.emitter.addListener(CHANGE, callback);
  }

  off(callback) {
    this.emitter.removeListener(CHANGE, callback);
  }
}

export default new ManagerStore();