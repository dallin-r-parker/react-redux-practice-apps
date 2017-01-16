import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePartyGoer} from './../actions/index';
import ListItem from './../components/list_item';

class PartyList extends Component {
  constructor(props) {
    super(props);

    this.removePartyGoer = this.removePartyGoer.bind(this);
  }

  removePartyGoer(name) {
    alert('no');
      this.props.removePartyGoer(name);
  }
  //
  // renderPartyList(name) {
  //   return (
  //     <li
  //       onClick={this.props.removePartyGoer}
  //       key={name}>
  //       {name}
  //     </li>
  //   )
  // }


  render() {
    const self = this;
    const people = this.props.partyList.map((person, index) => {
      return (
        <ListItem
          key={index}
          name={person}
          fn={this.removePartyGoer} />
      )
    })
    return (
      <div>
        <div className='master-party'>The master party list:</div> <br></br>
        <ul>
          {people}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {partyList: state.partyList};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removePartyGoer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyList);
