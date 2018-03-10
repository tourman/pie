import IActionManager from './IActionManager';
import IAction from './IAction';
import { Dispatcher } from 'flux';
import dispatcher from '../dispatcher/dispatcher';

class ActionManager implements IActionManager {
  constructor(public dispatcher: Dispatcher<IAction>) {
  }

  act(action: IAction): IActionManager {
    this.dispatcher.dispatch(action);
    return this;
  }
}

const actionManager = new ActionManager(dispatcher);

export default ActionManager;
export { ActionManager, actionManager };