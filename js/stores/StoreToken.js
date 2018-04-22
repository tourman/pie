'use strict';

class StoreToken {
  constructor() {
    this.tokens = new Map();
  }

  get(callback) {
    const token = this.tokens.get(callback);
    return token;
  }

  set(callback, token) {
    this.tokens.set(callback, token);
    return this;
  }

  eject(callback) {
    const token = this.get(callback);
    this.delete(callback);
    return token;
  }

  remove(callback) {
    this.delete(callback);
    return this;
  }
};

export default StoreToken;