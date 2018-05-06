'use strict';

import handler from 'factories/handlerFactory';
import StoreFactory from 'factories/StoreFactory';
import ModelFactory from 'factories/ModelFactory';

export default {
  handler,
  store: new StoreFactory(),
  model: new ModelFactory(),
};