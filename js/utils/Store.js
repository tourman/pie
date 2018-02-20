import { ReduceStore } from 'flux/utils';
import autoBind from '../utils/autobind';

class Store extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
    this.autoBindActs();
  }

  autoBindActs() {
    const acts = this.getActs();
    autoBind(this, acts);
  }

  getActs() {
    const keys = Object.keys(this);
    const actKeys = keys.filter(this.filterAct);
    const acts = actKeys.map(this.mapAct);
    return acts;
  }

  filterAct(key) {
    const matched = key.match(/^act\..+$/);
    return matched;
  }

  mapAct(actKey) {
    return this[actKey];
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