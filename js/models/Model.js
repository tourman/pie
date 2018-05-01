'use strict';

import Backbone from 'backbone';

class Model extends Backbone.Model {
  get(...args) {
    let result;
    const isGeneral = !args.length;
    if (isGeneral) {
      result = this.toJSON();
    } else  {
      result = super.get(...args);
    }
    return result;
  }

  addListenerOnChange(callback) {
    this.listenTo(this, 'change', () => {
      const state = this.get();
      callback(state);
    });
  }
};

export default Model;