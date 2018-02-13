import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ListActions {
  changeRate(item, rate) {
    Dispatcher.dispatch({
      actionType: ActionTypes.CHANGE_RATE,
      item,
      rate
    });
  }

  removeItem(item) {
    Dispatcher.dispatch({
      actionType: ActionTypes.REMOVE_ITEM,
      item
    });
  }
}

export default new ListActions();