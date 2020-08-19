import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class SltStatusAndSearchName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: -1
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const filter = {
      name : name === 'name' ? value.trim() : this.state.name.trim(),
      status : name === 'status' ? +value : +this.state.status
    }
    this.props.filterNameAndStatus(filter)
    this.setState({
      [name]: value
    })
  }

  render() {
    const { status,name } = this.state;
    return (
      <tr>
        <td>
          <input type="text" onChange={this.onChange}
            value={name}
            className="form-control"
            placeholder='Search Name' name="name"
          />
        </td>
        <td>
          <select
            className="custom-select"
            id="sltStatus"
            name='status'
            value={status}
            onChange={this.onChange}
          >
            <option value={-1}>Status</option>
            <option value={1}>Learning</option>
            <option value={0}>Leave school</option>
          </select>
        </td>
        <td></td>
        <td></td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    filterNameAndStatus: (filter) => {
      dispatch(actions.filterNameAndStatus(filter));
    }
  }
}

export default connect(null, mapDispatchToProps)(SltStatusAndSearchName);