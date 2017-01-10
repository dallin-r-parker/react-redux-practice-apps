import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePartyGoer} from './../actions/index';

class PartyList extends Component {
  constructor(props) {
    super(props);

    // this.removePerson = this.removePerson.bind(this);
  }

  removePerson(name) {
    this.props.removePartyGoer(name);
  }


  renderPartyList(name) {
    return (
      <li
        key={name}>
        {name}
      </li>
    )
  }


  render() {
    return (
      <div>
        I am the master party list: <br></br>
        <ul>
          {this.props.partyList.map(this.renderPartyList)}
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
