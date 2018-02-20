import mapObject from 'object.map';

class ManagerState {
  constructor() {
    this.states = [];
    this.reset();
  }

  default() {
    return {
      description: '',
      rate: ''
    }
  }

  set(state) {
    state = this.sanitize(state);
    state = this.push(state)
    return state;
  }

  reset() {
    let state = this.default();
    state = this.set(state);
    return state;
  }

  push(state) {
    state = Object.freeze(state);
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