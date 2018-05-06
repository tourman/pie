'use strict';

import utils from 'utils/common';
import dispatcher from 'dispatcher/';
import types from 'actions/';

class ActionFactory {
  constructor() {
    this.types = types;
    this.dispatcher = dispatcher;
    this.setActions();
  }

  setActions() {
    const functions = this.types.map(type => this.action.bind(this, type));
    this.actions = utils.zipObject(this.types, functions);
  }

  createAction(type) {
    const action = this.actions[type];
    if (!action) {
      throw new Error(`Invalid action ${type}`);
    }
    return action;
  }

  action(type, data) {
    this.dispatcher.dispatch({
      type,
      data,
    });
  }
};

export default ActionFactory;