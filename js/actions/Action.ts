import IExtendedAction from './IExtendedAction';
import IState from '../states/IState';
import IActionHandler from './IActionHandler';
import { SyntheticEvent } from 'react';

abstract class Action <IExtendedState extends IState, TElement> implements IExtendedAction <IExtendedState> {
  constructor(public event: SyntheticEvent <TElement>) {
  }

  act(handler: IActionHandler, startingState: IExtendedState): IExtendedState {
    return startingState;
  }

  data: any;
  abstract getValue(): any;
}

export default Action;