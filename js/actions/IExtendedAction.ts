import IAction from './IAction';
import IActionHandler from './IActionHandler';
import IState from '../states/IState';

interface IExtendedAction <IExtendedState extends IState> extends IAction {
  act(handler: IActionHandler, startingState: IExtendedState): IExtendedState;
}

export default IExtendedAction;