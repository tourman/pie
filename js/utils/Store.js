import { ReduceStore } from 'flux/utils';

class Store extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
  }

  reduce(startingState, action) {
    const act = this.getAct(action.type);
    const data = action.data || {};
    let endingState = act(startingState, data) || startingState;
    Object.freeze(endingState);
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