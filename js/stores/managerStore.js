import Store from './Store';
import dispatcher from '../dispatcher';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import ManagerAct from '../acts/ManagerAct';
import managerActions from '../actions/managerActions';

class ManagerStore extends Store {
  constructor(...args) {
    super(...args);

    const models = this.getModels();
    this.managerAct = new ManagerAct({...models, actions: managerActions});

    const {dataModel} = this.getModels();
    dataModel.addListenerOnChange(managerActions.changeItem);
    dataModel.fetch();
  }

  getInnerState() {
    const {
      dataModel,
      stateModel,
    } = this.getModels();
    const state = {
      ...dataModel .get(),
      ...stateModel.get(),
    };
    return state;
  }

  getModels() {
    this.models = this.models || {
      dataModel  : managerDataModel,
      stateModel : managerStateModel,
    };
    return this.models;
  }

  getAct(type) {
    const act = this.managerAct[type] || (() => {});
    return act;
  }
}

export default new ManagerStore(dispatcher);