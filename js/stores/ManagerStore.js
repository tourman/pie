import Store from './Store';
import managerDataModel from '../states/managerDataModel';
import managerStateModel from '../states/managerStateModel';
import managerActions from '../actions/managerActions';
import autobind from 'autobind-decorator';

class ManagerStore extends Store {
  constructor(...args) {
    super(...args);
  }

  get dataModel() {
    return managerDataModel;
  }

  get stateModel() {
    return managerStateModel;
  }

  get actions() {
    return managerActions;
  }

  get managerAct() {
    this._managerAct = this._managerAct || new ManagerAct(this);
    return this._managerAct;
  }

  get handler() {
    const store = this;
    const handler = this.factories.handler.createManagerStoreHandler({store});
    return handler;
  }

  get model() {
    const model = this.factories.model.createManagerModel();
    return model;
  }

  getInnerState() {
    if (!this.innerState) {
      this.setInnerState();
      this.dataModel .addListenerOnChange(this.setInnerState);
      this.stateModel.addListenerOnChange(this.setInnerState);
    }
    return this.innerState;
  }

  @autobind
  setInnerState() {
    this.innerState = {
      ...this.dataModel .get(),
      ...this.stateModel.get(),
    };
    return this;
  }

  getAct(type) {
    const act = this.managerAct[type] || (() => {});
    return act;
  }
}

export default ManagerStore;