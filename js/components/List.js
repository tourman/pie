import React, { Component } from 'react';
import listStore from '../stores/listStore';
import listActions from '../actions/listActions';

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

  onChangeRate(item) {
    return (event) => {
      event.preventDefault();
      listActions.changeRate(item, event.target.value);
    }
  }

  onRemove(item) {
    return (event) => {
      event.preventDefault();
      listActions.removeItem(item);
    }
  }

  componentDidMount() {
    listStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    listStore.removeChangeListener(this.onChange);
  }

  render() {
    let list = (
      <ul className="pie-list list-group">
        {this.state.items.map((item) => {
            let htmlItemName = `item.${item.id}`;
            let listItem = (
              <li
                className="pie-list__item list-group-item"
                key={item.id}
              >
                <form className="form-horizontal">
                  <div className="pie-item form-group">
                    <label
                      htmlFor={htmlItemName}
                      className="col-xs-5 control-label"
                    >
                      {item.description}
                    </label>

                    <div className="col-xs-5">
                      <input
                        className="form-control"
                        type="text"
                        id={htmlItemName}
                        value={item.rate}
                        autoComplete="off"
                        onChange={this.onChangeRate(item)}
                      />
                    </div>

                    <div className="col-xs-2">
                      <button
                        className="btn btn-danger btn-block"
                        onClick={this.onRemove(item)}
                      >
                        Del
                      </button>
                    </div>
                  </div>
                </form>
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