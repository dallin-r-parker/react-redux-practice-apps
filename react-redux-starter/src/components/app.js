import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello World! Love, App.
        {this.props.children}
      </div>
    )
  }
}
