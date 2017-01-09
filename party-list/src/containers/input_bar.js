import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPartyList} from './../actions/index';

const buttonStyle = {
  margin: '10px'
}

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchPartyList(this.state.term);
    this.setState({ term: '' })
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.onFormSubmit}>
        <input
          style={buttonStyle}
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}/>
        <button className="btn btn-primary" type='submit'>Add person to guest list</button>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPartyList}, dispatch);
}

export default connect(null, mapDispatchToProps)(InputBar);
