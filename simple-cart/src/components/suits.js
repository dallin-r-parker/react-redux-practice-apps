import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from './../actions/index';

class Suits extends Component {
  render() {
    const suits = [
      {
        name: 'Signature Tailored-fit Wool Suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Tropical Blend Slim Fit 2-Button Suit',
        url: `http://scene7.josbank.com/is/image/JosBank/26430_000_main?$browse_thumbnail$`
      },
      {
        name: 'Executive Collection Traditional Fit Suit',
        url: `http://scene7.josbank.com/is/image/JosBank/33JH_03_EXECUTIVE_GREY_MAIN?$browse_thumbnail$`
      },
      {
        name: 'Executive Collection Traditional Fit Suit',
        url: `http://scene7.josbank.com/is/image/JosBank/17182_040_main?$browse_thumbnail$`
      }
    ];


    return(
      <div className='suits'>
        {suits.map((suit, index) => {
          return (
            <div
              className='border'
              key={index}>
              <div className=''>
                {suit.name}
              </div>
              <img
                className='image'
                src={suit.url} />
              <button
                onClick={() => this.props.addToCart(suit)}
                >Add to cart</button>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addToCart}, dispatch);
}

export default connect(null, mapDispatchToProps)(Suits);
