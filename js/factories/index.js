'use strict';

import handler from 'factories/handlerFactory';
import StoreFactory from 'factories/StoreFactory';
import ModelFactory from 'factories/ModelFactory';
import ActionFactory from 'factories/ActionFactory';

const factories = {
  handler,
  store : new StoreFactory(),
  model : new ModelFactory(),
  action: new ActionFactory(),
};

window.factories = factories;
export default factories;