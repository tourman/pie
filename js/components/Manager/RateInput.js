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
      <input
        type="text"
        className="form-control"
        name="rate"
        value={props.value}
        placeholder="Rate"
        autoComplete="off"
        onChange={props.onChange}
      />
    </div>
  )
}