import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from './../actions/index';

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    }, () => console.log(this.state.term))
  }

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.onInputChange}
            type="text"
            className=""
            placeholder='add new task'
            value={this.state.term}
            />
          <button type="submit" className="">Add task!</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({})
}

export default connect()(AddItem);
