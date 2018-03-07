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

  reduce(startingState: IState, action: IAction): IState {
    let endingState;
    endingState = this.act(startingState, action);
    endingState = this.afterReduce(endingState, action);
    endingState = this.freeze(endingState);
    return endingState;
  }

  afterReduce(startingState: IState, action?: IAction): IState {
    return startingState;
  }

  freeze(state: IState): IState {
    const frozenState = utils.freeze(state);
    return frozenState;
  }

  act(startingState: IState, action: IAction): IState {
    const act = this.getAct(action);
    const endingState = act(startingState, action);
    return endingState;
  }

  getAct(action: IAction): (startingState: IState, action?: IAction) => { endingState: IState } {
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