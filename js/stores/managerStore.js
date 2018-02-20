import emitter from '../utils/emitter';
import dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import autoBind from '../utils/autobind';
import state from './manager/state';
import actions from './manager/actions';

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

  getState() {
    return this.state.get();
  }

  act(action) {
    let act = actions[action.type] || (() => {});
    act.call(this, action.data);
  }

  on(callback) {
    this.emitter.addListener(callback);
  }

  off(callback) {
    this.emitter.removeListener(callback);
  }
}

export default new ManagerStore();