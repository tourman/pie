import { ReduceStore } from 'flux/utils';
import { Dispatcher } from 'flux';
import utils from './common';
import IExtendedAction from '../actions/IExtendedAction';
import IActionHandler from '../actions/IActionHandler';
import IState from '../states/IState';
import * as fbEmitter from 'fbemitter';

type TPayload = {};

abstract class Store <IExtendedState extends IState> extends ReduceStore <IExtendedState, TPayload> implements IActionHandler {
  constructor(dispatcher: Dispatcher <TPayload>) {
    super(dispatcher);
  }

  reduce(startingState: IExtendedState, action: IExtendedAction <IExtendedState>): IExtendedState {
    let endingState: IExtendedState;
    endingState = action.act(this, startingState);
    endingState = this.afterReduce(endingState);
    endingState = this.freeze(endingState);
    return endingState;
  }

  afterReduce(startingState: IExtendedState): IExtendedState {
    return startingState;
  }

  freeze(state: IExtendedState): IExtendedState {
    const frozenState: IExtendedState = utils.freeze(state);
    return frozenState;
  }

  addListenerWithState(callback: (state: IExtendedState) => any): fbEmitter.EventSubscription {
    const subscription = this.addListener(() => {
      const state = this.getState();
      const result = callback(state);
      return result;
    });
    return subscription;
  }
}

export default Store;