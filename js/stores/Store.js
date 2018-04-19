import { ReduceStore } from 'flux/utils';
import utils from '../utils/common';

class Store extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
    this.tokens = [];
  }

  reduce(startingState, action) {
    let endingState;
    endingState = this.act(startingState, action);
    endingState = this.afterReduce(endingState, action);
    endingState = this.freeze(endingState);
    return endingState;
  }

  afterReduce(startingState) {
    return startingState;
  }

  freeze(obj) {
    const frozenObj = utils.freeze(obj);
    return frozenObj;
  }

  act(startingState, action) {
    const act = this.getAct(action.type);
    const endingState = act(startingState, action.data);
    return endingState;
  }

  getAct(type) {
    const key = this.getActKey(type);
    let act = this[key] || (state => state);
    return act;
  }

  getActKey(type) {
    const key = `act.${type}`;
    return key;
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
    token.remove();
    return this;
  }

  setToken(callback, token) {
    this.tokens.push({
      callback,
      token
    });
    return this;
  }

  getTokenByCallback(callback) {
    const hash = this.tokens.find(hash => hash.callback == callback);
    this.removeTokenByHash(hash);
    return hash && hash.token;
  }

  removeTokenByHash(hash) {
    this.tokens = this.tokens.filter(tokenHash => tokenHash != hash);
    return this;
  }
}

export default Store;