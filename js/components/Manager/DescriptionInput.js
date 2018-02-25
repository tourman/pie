import React, { Component } from 'react';
import managerActions from '../../actions/managerActions';
import autobind from 'autobind-decorator';

export class DescriptionInput extends Component {
  componentDidUpdate(prevProps) {
    this.focusOrBlur(prevProps);
  }

  componentDidMount() {
    this.focusOrBlur();
  }

  focusOrBlur(prevProps = {}) {
    const focus = !prevProps.focus && this.props.focus;
    const blur = prevProps.focus && !this.props.focus;
    if (focus) {
      this.focus();
    }
    if (blur) {
      this.blur();
    }
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  @autobind
  onFocus() {
    if (!this.props.focus) {
      managerActions.focusItem();
    }
  }

  @autobind
  onBlur() {
    if (this.props.focus) {
      managerActions.blurItem();
    }
  }

  render() {
    return (
      <input
        type="text"
        className="form-control"
        name="description"
        value={this.props.value}
        placeholder="Description"
        autoComplete="off"
        onChange={this.props.onChange}
        ref={input => this.input = input}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    );
  }
}

export default DescriptionInput;