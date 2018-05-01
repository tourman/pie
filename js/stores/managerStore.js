import Store from './Store';
import dispatcher from '../dispatcher';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import managerAct from '../acts/managerAct';
import managerActions from '../actions/managerActions';

class ManagerStore extends Store {
  constructor(...args) {
    super(...args);

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
    return {
      dataModel:  managerDataModel,
      stateModel: managerStateModel,
    };
  }

  getAct(type) {
    const act = managerAct[type] || (() => {});
    return act;
  }

  afterReduce() {
    const {
      dataModel,
      stateModel,
    } = this.getModels();
    const valid = dataModel.isValid();
    const blocked = dataModel.isBlocked();
    stateModel.save({
      valid,
      blocked,
    });
    dataModel.save();
  }
}

export default new ManagerStore(dispatcher);