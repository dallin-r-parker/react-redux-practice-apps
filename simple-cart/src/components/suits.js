import React, { Component } from 'react';

export default class Suits extends Component {
  render() {
    const suits = [
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      },
      {
        name: 'Signature Gold 2-button tailored fit wool suit',
        url: `http://scene7.josbank.com/is/image/JosBank/29646_000_main?$browse_thumbnail$`
      }
    ];
    return(
      <div className='suits'>
        {suits.map((suit, index) => {
          return (
            <div
              key={index}>
              <div className=''>
                {suit.name}
              </div>
              <img
                className='image'
                src={suit.url} />
            </div>
          )
        })}
      </div>
    )
  }
}
