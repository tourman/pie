import emitter from '../utils/emitter';
import dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import autoBind from '../utils/autobind';
import state from './manager/state';

class ManagerStore {
  constructor() {
    this.emitter = emitter;
    this.state = state;

    autoBind(this, [
      'act'
    ]);

    this.dispatcher = dispatcher;
    this.dispatcher.register(this.act);
  }

  act(action) {
    let act = this[action.type] || (() => {});
    act.call(this, action.data);
  }

  changeItem({item}) {
    const state = this.state.set(item);
    this.emitter.emit(state);
  }

  resetItem() {
    const state = this.state.reset();
    this.emitter.emit(state);
  }

  on(callback) {
    this.emitter.addListener(callback);
  }

  off(callback) {
    this.emitter.removeListener(callback);
  }
}

export default new ManagerStore();