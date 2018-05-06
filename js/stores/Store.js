import { ReduceStore } from 'flux/utils';
import utils from '../utils/common';
import StoreToken from './StoreToken';
import factories from 'factories/';

class Store extends ReduceStore {
  constructor(...args) {
    super(...args);
    this.token = new StoreToken();
    this.subscribe();
  }

  get factories() {
    return factories;
  }

  subscribe() {
  }

  getInitialState() {
    const state = this.model.get();
    return state;
  }

  reduce(startingState, action) {
    const act = this.handler[action.type] || (() => this.model.set({}));
    const boundAct = act.bind(this.handler);
    boundAct(action.data);
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