import mapObject from 'object.map';

class ManagerState {
  constructor() {
    this.states = [Object.freeze({
      description: '',
      rate: ''
    })];
  }

  set(state) {
    state = this.sanitize(state);
    state = Object.freeze(state)
    this.states.push(state);
    return state;
  }

  sanitize(state) {
    if (state.rate && state.rate.length) {
      state.rate = state.rate.replace(/\D/g, '');
    }
    return state;
  }
}

export default new ManagerState();