import emitter from '../utils/emitter';
import dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import mapObject from 'object.map';

class ManagerStore {
  constructor() {
    this.emitter = emitter;

    this.attrs = {
      description: '',
      rate: ''
    };

    this.act = this.act.bind(this);
    this.set = this.set.bind(this);

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

  changeItem({item}) {
    item = mapObject(item, this.set);
    this.emitter.emit(item);
  }

  set(value, key) {
    value = this[`set.${key}`](value);
    return value;
  }

  'set.rate'(rate) {
    rate = this.sanitizeRate(rate);
    this.attrs.rate = rate;
    return rate;
  }

  'set.description'(description) {
    this.attrs.description = description;
    return description;
  }

  on(callback) {
    this.emitter.addListener(callback);
  }

  off(callback) {
    this.emitter.removeListener(callback);
  }
}

export default new ManagerStore();