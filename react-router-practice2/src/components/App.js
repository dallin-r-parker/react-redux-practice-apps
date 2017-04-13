import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, remove } from '../actions';
import logo from './../logo.svg';
import './../App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.addItem(this.state.task);
    this.setState({
      task: ''
    })
  }

  handleRemoval(i) {
    console.log(i);
    this.props.remove(i)
  }

  onInputChange(e) {

    this.setState({
      task: e.target.value
    }, ()=>{console.log(this.state.task)})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React TODO app</h2>
        </div>
        <input
          value={this.state.task}
          onChange={this.onInputChange}
          type=""
          className=""/>
        <button type="" className=""
          onClick={ this.onButtonClick }>Add Task</button>
        <p>todo:</p>
        <div className="">{ this.props.todo.map((task, i) => {
            return (
              <div key={i} className="">
              <p >{task}</p>
              <button onClick={()=> {this.handleRemoval(i)}} >Remove task</button>
              </div>
            )
          }) }</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // console.log('dispatch', dispatch);
  return bindActionCreators({ addItem, remove }, dispatch)
}

function mapStateToProps(state) {
  // console.log('state', state);
  return { todo: state.todo }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
