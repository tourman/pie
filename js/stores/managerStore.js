import Store from './Store';
import dispatcher from '../dispatcher';
import autobind from 'autobind-decorator';
import utils from '../utils/common';
import managerStateModel from '../states/managerStateModel';

class ManagerStore extends Store {
  getInitialState() {
    managerStateModel.fetch();
    const initialState = managerStateModel.get();
    return initialState;
  }

  afterReduce(startingState, action) {
    managerStateModel.setBlocked();
    managerStateModel.setValid();
    managerStateModel.save();
    const state = managerStateModel.get();
    return state;
  }

  @autobind
  'act.changeItem'(startingState, {item}) {
    managerStateModel.set(item);
    const state = managerStateModel.get();
    return state;
  }

  @autobind
  'act.resetItem'(startingState) {
    managerStateModel.set({
      focus       : true,
      description : '',
      rate        : '',
    });
    const state = managerStateModel.get();
    return state;
  }

  @autobind
  'act.focusItem'(startingState) {
    managerStateModel.set({
      focus       : true
    });
    const state = managerStateModel.get();
    return state;
  }

  @autobind
  'act.blurItem'(startingState) {
    managerStateModel.set({
      focus       : false
    });
    const state = managerStateModel.get();
    return state;
  }
}

export default new ManagerStore(dispatcher);