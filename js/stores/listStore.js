import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

const CHANGE = 'CHANGE';
let _listState = [];

class ListStore extends EventEmitter {
  constructor() {
    super();
    Dispatcher.register(this._registerToActions.bind(this));
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case ActionTypes.ADD_NEW_ITEM:
        this._addNewItem(action);
        break;
      case ActionTypes.CHANGE_RATE:
        this._changeRate(action);
        break;
    }
  }

  _addNewItem({item}) {
    item.id = _listState.length;
    item.rate = parseFloat(item.rate);
    _listState.push(item);
    this.emit(CHANGE);
  }

  _changeRate({item, rate}) {
    item.rate = parseFloat(rate);
    _listState[item.id] = item;
    this.emit(CHANGE);
  }

  getAllItems() {
    return _listState;
  }

  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }
}

export default new ListStore();