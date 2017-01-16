import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from './../actions/index';
import { removeCompleted } from './../actions/index';
import TodoList from './todo_list';

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    }, () => console.log(this.state.term))
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.addTask(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.onFormSubmit}>
            <input
              style={{"fontSize": "20px"}}
              onChange={this.onInputChange}
              type="text"
              className=""
              placeholder='add new task'
              value={this.state.term}
              />
            <button
              style={{"fontSize": "20px"}}
              type="submit"
              className=""
              >Add task!</button>
          </form>
        </div>
        <section className='list-container'>
        <div style={{"width": "400px"}}>
          <div>TODO:</div>
            <TodoList />
        </div>
        <div style={{"width": "400px"}}>
          <div>COMPLETED:</div>
          <ul>
            {this.props.completed.map(task => {
              return (
                <li
                  className='pointer'
                  onClick={() => this.props.removeCompleted(task)}
                  key={task}>
                  {task}
                </li>
              )
            })}
          </ul>
        </div>
        </section>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTask: addTask,
    removeCompleted: removeCompleted
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    completed: state.completed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
