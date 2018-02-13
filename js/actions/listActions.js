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
}

export default new ListActions();