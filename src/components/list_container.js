import React, { Component } from "react";
import List_item from "./list_item";

class ListContainer extends Component {
  render() {
    console.log("Data: ", this.props.list);
    const list = this.props.list.map((item, index) => {
      return <List_item key={index} index={index} item={item} delete={this.props.delete} complete={this.props.toggleComplete}/>;
    });
    return (
      <div>
        <ul className="collection">{list.length ? list : <li className='center-align'> No to-do items</li>}</ul>
      </div>
    );
  }
}

export default ListContainer;
