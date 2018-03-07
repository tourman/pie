import { ReduceStore } from 'flux/utils';
import { Dispatcher } from 'flux';
import utils from './common';
import { IState } from '../states/IState';
import { IAction } from '../actions/IAction';

type TPayload = {};

abstract class Store extends ReduceStore <IState, TPayload> {
  constructor(dispatcher: Dispatcher <TPayload>) {
    super(dispatcher);
  }

  reduce(startingState: IState, action: IAction) {
    let endingState;
    endingState = this.act(startingState, action);
    endingState = this.afterReduce(endingState, action);
    endingState = this.freeze(endingState);
    return endingState;
  }

  afterReduce(startingState: IState, action?: IAction) {
    return startingState;
  }

  freeze(state: IState) {
    const frozenState = utils.freeze(state);
    return frozenState;
  }

  act(startingState: IState, action: IAction) {
    const act = this.getAct(action);
    const endingState = act(startingState, action.data);
    return endingState;
  }

  getAct(action: IAction) {
    const type = action.type;
    const key = this.getActKey(type);
    let act = this[key] || (state => state);
    return act;
  }

  getActKey(type) {
    const key = `act.${type}`;
    return key;
  }

  addListener(callback) {
    super.addListener(() => {
      const state = this.getState();
      return callback(state);
    });
  }
}

export default Store;