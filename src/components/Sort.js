import React, { Component } from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: 0
    }
    this.onSltSort = this.onSltSort.bind(this);
  }

  onSltSort(event) {
    const target = event.target;
    const value = parseInt(target.value);
    const nameSlt = (value === 1 || value === -1) ? 'name' : 'status';
    this.setState({
      name: nameSlt,
      value: value
    });
    const sortBy = {
      name: nameSlt,
      value: value
    }
    this.props.sortNameOrStatus(sortBy);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="sortBy">Sort</label>
          </div>
          <select
            value={value}
            onChange={this.onSltSort}
            name='sltSort'
            className="custom-select"
            id="sortBy"
          >
            <option value={0}>Select By:</option>
            <option value={1}>Name A-Z</option>
            <option value={-1}>Name Z-A</option>
            <option value={2}>Learning</option>
            <option value={-2}>Leave School</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    sortNameOrStatus: (sortBy) => {
      dispatch(actions.sortNameOrStatus(sortBy));
    }
  }
}

export default connect(null,mapDispatchToProps)(Sort);