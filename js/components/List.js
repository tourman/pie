import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className="list">
        <li className="list__item">
          <div className="item">
            Some Item (Value)
          </div>
        </li>
      </ul>
    );
  }
}

export default List;