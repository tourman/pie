import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ManagerActions {
  addNewItem(item) {
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_NEW_ITEM,
      item
    });
  }

  changeItem(item) {
    Dispatcher.dispatch({
      type: ActionTypes.changeItem,
      data: {item}
    });
  }

  resetItem() {
    Dispatcher.dispatch({
      type: ActionTypes.resetItem
    });
  }

  focusItem() {
    Dispatcher.dispatch({
      type: ActionTypes.focusItem
    });
  }

  blurItem() {
    Dispatcher.dispatch({
      type: ActionTypes.blurItem
    });
  }
}

export default new ManagerActions();