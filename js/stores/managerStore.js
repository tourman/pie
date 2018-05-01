import Store from './Store';
import dispatcher from '../dispatcher';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import ManagerAct from '../acts/ManagerAct';
import managerActions from '../actions/managerActions';
import autobind from 'autobind-decorator';

class ManagerStore extends Store {
  constructor(...args) {
    super(...args);

    this.actions = managerActions;

    const models = this.getModels();
    this.managerAct = new ManagerAct({...models, actions: this.actions});
  }

  addListener(...args) {
    const result = super.addListener(...args);
    const {dataModel} = this.getModels();
    this.actions.fetchItem();
    dataModel.addListenerOnChange(this.actions.changeItem);
  }

  getInnerState() {
    const {
      dataModel,
      stateModel,
    } = this.getModels();
    if (!this.innerState) {
      this.setInnerState();
      dataModel .addListenerOnChange(this.setInnerState);
      stateModel.addListenerOnChange(this.setInnerState);
    }
    return this.innerState;
  }

  @autobind
  setInnerState() {
    const {
      dataModel,
      stateModel,
    } = this.getModels();
    this.innerState = {
      ...dataModel .get(),
      ...stateModel.get(),
    };
    return this;
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