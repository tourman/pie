'use strict';

class ItemStoreHandler {
  constructor({model}) {
    this.model = model;
  }

  setItem({item}) {
    this.model.set(item);
  }
}

export default ItemStoreHandler;