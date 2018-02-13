import React, { Component } from 'react';
import listStore from '../stores/listStore';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.getAllItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  getAllItems() {
    return listStore.getAllItems();
  }

  onChange() {
    this.setState({
      items: this.getAllItems()
    });
  }

  componentDidMount() {
    listStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    listStore.removeChangeListener(this.onChange);
  }

  render() {
    let list = (
      <ul className="list">
        {this.state.items.map((item) => {
            let listItem = (
              <li
                className="list__item"
                key={item.id}
              >
                <div className="item">
                  {item.description} ({item.rate})
                </div>
              </li>
            );
            return listItem;
          }
        )}
      </ul>
    );
    return list;
  }
}

export default List;