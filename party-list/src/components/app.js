import React, {Component} from 'react';

import InputBar from './../containers/input_bar';
import PartyList from './../containers/party_list';



export default class App extends Component {
  render() {
    return (
      <div>
        <InputBar />
        <PartyList />
      </div>
    );
  }
}
