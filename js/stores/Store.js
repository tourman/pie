import { ReduceStore } from 'flux/utils';
import utils from '../utils/common';
import StoreToken from './StoreToken';

class Store extends ReduceStore {
  constructor(...args) {
    super(...args);
    this.token = new StoreToken();
  }

  getInitialState() {
    const innerState = this.getInnerState();
    return innerState;
  }

  reduce(startingState, action) {
    this.handler[action.type](action.data);
    const endingState = this.model.get();
    const changed = this.model.isChanged();
    const resultState = changed ? endingState : startingState;
    return resultState;
  }

  act(action) {
    const act = this.getAct(action.type);
    act(action.data);
    return this;
  }

  afterReduce() {
    return this;
  }

  addListener(callback) {
    const token = this.token.get(callback) || super.addListener(() => {
      const state = this.getState();
      return callback(state);
    });
    this.token.set(callback, token);
    return this;
  }

  removeListener(callback) {
    const token = this.token.eject(callback);
    token.remove();
    return this;
  }
}

export default Store;