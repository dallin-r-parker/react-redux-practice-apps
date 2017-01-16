import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTask } from './../actions/index';
import { bindActionCreators } from 'redux';
import { addCompleted } from './../actions/index';

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.tasks.map(task => {
          return(
            <li
              className='pointer'
              key={task}
              onClick={() => {
                this.props.removeTask(task);
                this.props.addCompleted(task);
              }}>
              {task}
            </li>
          )
        })}
      </ul>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeTask: removeTask,
    addCompleted: addCompleted
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
