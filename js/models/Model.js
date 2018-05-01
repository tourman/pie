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
    this.listenTo(this, 'change', function(model, options) {
      const state = model.get();
      const result = callback.call(this, state, options);
      return result;
    });
    return this;
  }
};

export default Model;