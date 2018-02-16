import React from 'react';
import classNames from 'classnames';
import BootstrapGrid from '../BootstrapGrid';

export default (props) => {
  const grid = new BootstrapGrid(props);
  return (
    <div className={classNames([
        ...grid.classNames,
        'pie-form-control'
      ])}
    >
      <button
        type="submit"
        className={classNames([
          'btn',
          'btn-primary',
          'btn-block'
        ])}
      >
        Add
      </button>
    </div>
  )
}