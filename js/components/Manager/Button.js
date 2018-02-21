import React from 'react';
import classNames from 'classnames';

export default (props) => {
  return (
    <button
      type="submit"
      className={classNames([
        'btn',
        'btn-primary',
        'btn-block'
      ])}
      disabled={props.disabled}
    >
      Add
    </button>
  )
}