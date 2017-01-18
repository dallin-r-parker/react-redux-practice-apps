import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './../actions/index';
import { bindActionCreators } from 'redux';


class Cart extends Component {
  render() {
    return (
      <div>
        <h1 className='cartTitle'>Your Cart</h1>
        <div>
          {this.props.cart.map((suit, index) => {
            return (
              <div
                className='border wrap'
                key={index}>
                <div>
                  <div className=''>
                    {suit.name}
                  </div>
                  <img
                    className='image'
                    src={suit.url} />
                  <button
                    onClick={() => this.props.removeFromCart(index)}
                    >Remove item</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {cart: state.cart};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeFromCart: removeFromCart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
