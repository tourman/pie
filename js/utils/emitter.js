import { EventEmitter } from 'events';

const CHANGE = 'CHANGE';

class Emitter {
  constructor() {
    this.emitter = new EventEmitter();
  }

  emit(...args) {
    this.emitter.emit(CHANGE, ...args);
  }

  addListener(...args) {
    this.emitter.addListener(CHANGE, ...args);
  }

  removeListener(...args) {
    this.emitter.removeListener(CHANGE, ...args);
  }
}

export default new Emitter();