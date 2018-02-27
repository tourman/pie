import { ReduceStore } from 'flux/utils';
import utils from './common';

class Store extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
  }

  reduce(startingState, action) {
    const act = this.getAct(action.type);
    const data = action.data || {};
    let endingState = act(startingState, data) || startingState;
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

  extend(startingState, ...extensions) {
    const endingState = Object.assign({}, startingState, ...extensions);
    return endingState;
  }

  getAct(type) {
    const key = this.getActKey(type);
    let act = this[key] || (() => {});
    return act;
  }

  getActKey(type) {
    const key = `act.${type}`;
    return key;
  }

  addListener(callback) {
    super.addListener(() => {
      const state = this.getState();
      return callback(state);
    });
  }
}

export default Store;