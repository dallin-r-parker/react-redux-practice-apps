import React, { Component } from 'react';
import Todo from './todo';
import AddItem from './addItem';

export default class App extends Component {
  render() {
    return (
      <div>
        {/*{this.props.children}*/}
        <Todo />
        <AddItem />
      </div>
    )
  }
}
