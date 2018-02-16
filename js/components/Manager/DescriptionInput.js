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
        name="description"
        value={props.value}
        placeholder="Description"
        autoComplete="off"
        onChange={props.onChange}
        ref={props.inputRef}
      />
    </div>
  )
}