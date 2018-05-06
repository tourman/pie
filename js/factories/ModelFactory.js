'use strict';

import ItemModel from 'models/ItemModel';
import ManagerModel from 'models/ManagerModel';

class ModelFactory {
  createItemModel(...args) {
    this.itemModel = this.itemModel || new ItemModel(...args);
    return this.itemModel;
  }

  createManagerModel(...args) {
    this.managerModel = this.managerModel || new ManagerModel(...args);
    return this.managerModel;
  }
};

export default ModelFactory;