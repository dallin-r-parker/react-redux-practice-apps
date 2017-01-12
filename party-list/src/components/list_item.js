import React, { Component } from 'react';


export default class ListItem extends Component {
  constructor(props) {
    super();

  }

  render() {
    return (
      <div>
        <div onClick={() => this.props.fn(this.props.name)}>{this.props.name}</div>
      </div>

    )
  }
}
