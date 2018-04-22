import { ReduceStore } from 'flux/utils';
import utils from '../utils/common';

class Store extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
    this.tokens = new Map();
  }

  getInitialState() {
    this.model = this.model || this.getModel();
    this.model.fetch();
    const initialState = this.model.get();
    return initialState;
  }

  reduce(startingState, action) {
    this.act(action);
    this.afterReduce(action);
    const state = this.model.get();
    return state;
  }

  act(action) {
    const act = this.getAct(action.type);
    act(action.data);
    return this;
  }

  addListener(callback) {
    const token = this.getTokenByCallback(callback) || super.addListener(() => {
      const state = this.getState();
      return callback(state);
    });
    this.setToken(callback, token);
    return this;
  }

  removeListener(callback) {
    const token = this.getTokenByCallback(callback);
    this.removeTokenByCallback(callback);
    token.remove();
    return this;
  }

  setToken(callback, token) {
    this.tokens.set(callback, token);
    return this;
  }

  getTokenByCallback(callback) {
    const token = this.tokens.get(callback);
    return token;
  }

  removeTokenByCallback(callback) {
    this.tokens.delete(callback);
    return this;
  }
}

export default Store;