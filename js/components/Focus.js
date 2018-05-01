import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import utils from '../utils/common';

export default OriginComponent => (class Focus extends Component {
  constructor(...args) {
    super(...args);
    this.needToUpdateComponent = true;
  }

  componentWillReceiveProps(nextProps) {
    this.focusOrBlur(this.props, nextProps);
    this.needToUpdateComponent = this.doesNeedToUpdateComponent(this.props, nextProps);
  }

  shouldComponentUpdate() {
    const needToUpdateComponent = this.needToUpdateComponent;
    this.needToUpdateComponent = true;
    return needToUpdateComponent;
  }

  componentDidMount() {
    this.focusOrBlur({}, this.props);
  }

  focusOrBlur(prevProps = {}, nextProps = {}) {
    const focus = this.isFocus(prevProps, nextProps);
    const blur = this.isBlur(prevProps, nextProps)
    if (focus) {
      this.focus();
    }
    if (blur) {
      this.blur();
    }
  }

  doesNeedToUpdateComponent(prevProps = {}, nextProps = {}) {
    const differentKeys = utils.differentKeys(prevProps, nextProps);
    const equal = utils.equal(differentKeys, ['focus']);
    return !equal;
  }

  isFocus(prevProps = {}, nextProps = {}) {
    const focus = !prevProps.focus && nextProps.focus;
    return focus;
  }

  isBlur(prevProps = {}, nextProps = {}) {
    const blur = prevProps.focus && !nextProps.focus;
    return blur;
  }

  focus() {
    this.control.focus();
  }

  blur() {
    this.control.blur();
  }

  @autobind
  onFocus() {
    clearTimeout(this.blurTimer);
    if (!this.props.focus) {
      this.focusTimer = setTimeout(() => this.props.onFocus());
    }
  }

  @autobind
  onBlur() {
    clearTimeout(this.focusTimer);
    if (this.props.focus) {
      this.blurTimer = setTimeout(() => this.props.onBlur());
    }
  }

  render() {
    return (
      <OriginComponent
        {...this.props}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        controlRef={control => this.control = control}
      />
    );
  }
});