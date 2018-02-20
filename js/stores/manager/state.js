import mapObject from 'object.map';

class ManagerState {
  constructor() {
    this.states = [];
    this.reset();
  }

  default() {
    return {
      title       : 'Try to add an item',
      description : '',
      rate        : ''
    }
  }

  set(state) {
    this.state = this.sanitize(state);
    this.state = this.push(this.state)
    return this.state;
  }

  get() {
    return this.state;
  }

  reset() {
    this.state = this.default();
    this.state = this.set(this.state);
    return this.state;
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