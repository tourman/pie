import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ManagerActions {
  addNewItem(item) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_NEW_ITEM,
      item
    });
  }

  changeItem(data) {
    Dispatcher.dispatch({
      type: 'changeItem',
      data: data,
    });
  }

  resetItem(data) {
    Dispatcher.dispatch({
      type: 'resetItem',
      data: data,
    });
  }

  endReadItem(data) {
    Dispatcher.dispatch({
      type: 'endReadItem',
      data: data,
    });
  }

  focusItem(data) {
    Dispatcher.dispatch({
      type: 'focusItem',
      data: data,
    });
  }

  blurItem(data) {
    Dispatcher.dispatch({
      type: 'blurItem',
      data: data,
    });
  }
}

export default new ManagerActions();