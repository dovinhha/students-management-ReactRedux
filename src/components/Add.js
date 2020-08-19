import React, { Component } from 'react';
import add from './image/add.svg';
import { connect } from 'react-redux';
import *as actions from '../actions/index';

class Add extends Component {

  onClickToOpen(){
    return () => {
      this.props.setStudent();
      this.props.toggleFormAdd();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickToOpen()} type="button" className="btn btn-info">Add Student
          <img className="imgAdd" src={add} alt="add"/>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    toggleFormAdd : () => {
      dispatch(actions.toggleFormAdd());
    },
    setStudent : () => {
      dispatch(actions.setStudent());
    }
  }
}

export default connect(null,mapDispatchToProps) (Add);