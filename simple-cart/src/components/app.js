import React, { Component } from 'react';
import Suits from './suits';
import Cart from './cart';



export default class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>Jos. A. Blank</div>
        <Suits />
        <Cart />
      </div>
    );
  }
}
