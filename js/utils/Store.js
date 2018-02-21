import { ReduceStore } from 'flux/utils';

class Store extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
  }

  reduce(startingState, action) {
    const act = this.getAct(action.type);
    const data = action.data || {};
    let endingState = act(startingState, data) || startingState;
    endingState = this.afterReduce(endingState, action);
    Object.freeze(endingState);
    return endingState;
  }

  afterReduce(startingState) {
    return startingState;
  }

  extend(startingState, ...extensions) {
    const endingState = Object.assign({}, startingState, ...extensions);
    return endingState;
  }

  getAct(type) {
    const key = `act.${type}`;
    let act = this[key] || (() => {});
    return act;
  }

  addListener(callback) {
    super.addListener(() => {
      const state = this.getState();
      return callback(state);
    });
  }
}

export default Store;