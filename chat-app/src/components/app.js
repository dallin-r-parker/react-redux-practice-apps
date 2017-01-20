import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChats } from './../actions/actions';


class App extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.getChats()}
          >Get za chats!!!</button>
        <div>{this.props.chats.map((chat, index) => {
            return (
              <div key={index}>{chat.message}</div>
            )
          })}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getChats: getChats}, dispatch);
}

function mapStateToProps(state) {
  return {chats: state.chats};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
