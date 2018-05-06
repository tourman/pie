'use strict';

import dispatcher from 'dispatcher/';
import managerStore from '../stores/managerStore';
import ItemStore from 'stores/ItemStore';
import ItemModel from 'models/ItemModel';

class ModelFactory {
  createItemModel(...args) {
    this.itemModel = this.itemModel || new ItemModel(...args);
    return this.itemModel;
  }
};

export default ModelFactory;