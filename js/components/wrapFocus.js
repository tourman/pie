import React, { Component } from 'react';
import autobind from 'autobind-decorator';

export default function wrapFocus(WrappedComponent, {onFocus, onBlur}) {
  return class Focus extends Component {
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
      this.control.focus();
    }

    blur() {
      this.control.blur();
    }

    @autobind
    onFocus() {
      if (!this.props.focus) {
        onFocus();
      }
    }

    @autobind
    onBlur() {
      if (this.props.focus) {
        onBlur();
      }
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          controlRef={control => this.control = control}
        />
      );
    }
  }
};