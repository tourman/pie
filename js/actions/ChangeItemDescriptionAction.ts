import Action from './Action';
import IEventAction from './IEventAction';
import IChangeItemDescriptionActionHandler from './IChangeItemDescriptionActionHandler';
import IManagerState from '../states/IManagerState';
import { ChangeEvent } from 'react';

class ChangeItemDescriptionAction extends Action <IManagerState, HTMLInputElement> implements IEventAction {
  constructor(public event: ChangeEvent <HTMLInputElement>) {
    super(event);
  }

  act(actionHandler: IChangeItemDescriptionActionHandler, startingState: IManagerState): IManagerState {
    const endingState = actionHandler.actChangeItemDescription(startingState);
    return endingState;
  }

  getValue(): string {
    return this.event.target.value;
  }
}

export default ChangeItemDescriptionAction;