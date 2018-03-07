import * as React from 'react';
import managerActions from '../actions/managerActions';
import Button from './Manager/Button';
import RateInput from './Manager/RateInput';
import DescriptionInputWithFocus from './Manager/DescriptionInputWithFocus';
import managerStore from '../stores/managerStore';
import autobind from 'autobind-decorator';
import nodeFactory from './nodeFactory';
import { IManagerState } from '../states/manager';

type P = {};

class Manager extends React.Component <P, IManagerState> {
  constructor(props: P) {
    super(props);

    this.state = managerStore.getState();
  }

  @autobind
  updateState(state: IManagerState): Manager {
    super.setState(state);
    return this;
  }

  @autobind
  onChangeDescription(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    managerActions.changeItem({
      description: event.target.value
    });
  }

  @autobind
  onChangeRate(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    managerActions.changeItem({
      rate: event.target.value
    });
  }

  componentDidMount() {
    managerStore.addListener(this.updateState);
  }

  @autobind
  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    managerActions.addNewItem();
    managerActions.resetItem();
  }

  @autobind
  onFocusDescription() {
    managerActions.focusItem();
  }

  @autobind
  onBlurDescription() {
    managerActions.blurItem();
  }

  render() {
    const Row = nodeFactory.createRow();
    const Col = nodeFactory.createCol();
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.state.title}
        </div>
        <div className="panel-body pie-form-panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="container-fluid pie-form-container">
              <Row>
                <Col
                  className="pie-form-control"
                  xs={12}
                  sm={5}
                >
                  <DescriptionInputWithFocus
                    value={this.state.description}
                    focus={this.state.focus}
                    onChange={this.onChangeDescription}
                    onFocus={this.onFocusDescription}
                    onBlur={this.onBlurDescription}
                  />
                </Col>
                <Col
                  className="pie-form-control"
                  xs={12}
                  sm={5}
                >
                  <RateInput
                    value={this.state.rate}
                    onChange={this.onChangeRate}
                    valid={this.state.valid}
                  />
                </Col>
                <Col
                  className="pie-form-control"
                  xs={12}
                  sm={2}
                >
                  <Button
                    disabled={this.state.blocked}
                  />
                </Col>
              </Row>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Manager;