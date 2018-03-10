import IManagerState from '../states/IManagerState';

interface IChangeItemDescriptionActionHandler {
  actChangeItemDescription(state: IManagerState): IManagerState;
}

export default IChangeItemDescriptionActionHandler;