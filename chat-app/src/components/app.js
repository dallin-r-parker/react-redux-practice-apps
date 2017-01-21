import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChats } from './../actions/actions';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    }, () => console.log(this.state));
  };

  onButtonClick() {
    axios.post('http://localhost:8000/api/new-message', {message: this.state.term}).then(
      response => {
        this.props.getChats();
      }
    )
    this.setState({
      term: ''
    });

  }

  render() {
    return (
      <div className='bg-wrap'>
        <div className='input-wrap'>
          <input
            placeholder='type to chat...'
            value={this.state.term}
            onChange={this.onInputChange}
            type="text" className=""/>
        </div>
        <div className='chat-wrap'>
          <button
            onClick={this.onButtonClick}
            type="" className="">Submit new chat</button>
          <button
            onClick={() => this.props.getChats()}
            >Get za chats!!!</button>
          <div>{this.props.chats.map((chat, index) => {
              return (
                <div key={index}>{chat}</div>
              )
            })}</div>
        </div>
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
