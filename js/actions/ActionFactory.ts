import { ChangeEvent } from 'react';
import ChangeItemDescriptionAction from './ChangeItemDescriptionAction';

class ActionFactory {
  createChangeItemDescriptionAction(event: ChangeEvent <HTMLInputElement>): ChangeItemDescriptionAction {
    const action = new ChangeItemDescriptionAction(event);
    return action;
  }
};

const actionFactory = new ActionFactory();

export default ActionFactory;
export { ActionFactory, actionFactory };