import React, { Component } from 'react';
import autobind from 'autobind-decorator';

class Focus extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    this.focusOrBlur(prevProps);
  }

  componentDidMount() {
    this.focusOrBlur();
  }

  focusOrBlur(prevProps = {}) {
    const focus = this.isFocus();
    const blur = this.isBlur()
    if (focus) {
      this.focus();
    }
    if (blur) {
      this.blur();
    }
  }

  isFocus(prevProps = {}) {
    const focus = !prevProps.focus && this.props.focus;
    return focus;
  }

  isBlur(prevProps = {}) {
    const blur = prevProps.focus && !this.props.focus;
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
    if (!this.props.focus) {
      this.props.onFocus();
    }
  }

  @autobind
  onBlur() {
    if (this.props.focus) {
      this.props.onBlur();
    }
  }

  render() {
    return (
      <this.props.wrappedComponent
        {...this.props}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        controlRef={control => this.control = control}
      />
    );
  }
}

export default Focus;