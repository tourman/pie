'use strict';

import StoreFactory from 'factories/StoreFactory';
import ModelFactory from 'factories/ModelFactory';
import ActionFactory from 'factories/ActionFactory';
import HandlerFactory from 'factories/HandlerFactory';

const factories = {
  store  : new StoreFactory(),
  model  : new ModelFactory(),
  action : new ActionFactory(),
  handler: new HandlerFactory(),
};

window.factories = factories;
export default factories;