import React, { Component } from 'react';
import classnames from 'classnames';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class ListStudent extends Component {

  onClickToEdit() {
    return () => {
      this.props.toggleFormEdit();
      this.props.editInfoStudent(this.props.std);
    }
  }

  view() {
    return () => {
      this.props.toggleFormInfo();
      this.props.viewInfoStudent(this.props.std);
    }
  }

  updateStatus(){
    return () => {
      const { toggleAndCloseForm } = this.props;
      this.props.onUpdateStatus(this.props.std.id);
      if(toggleAndCloseForm.disPlayFormEdit || toggleAndCloseForm.disPlayFormAdd || toggleAndCloseForm.disPlayFormInfo){
        this.props.closeForm();
      }
    }
  }

  onClickToDel() {
    return () => {
      this.props.delStudent(this.props.std.id);
      this.props.closeForm();
    }
  }

  render() {
    const {
      std
    } = this.props;
    const gender = std.sltGender === true ? 'Male' : 'Female';
    const status = std.status === true ? 'Learning' : 'Leave school';
    const disBtn = std.status === true ? 'btn-success' : 'btn-danger';
    return (
      <tr>
        <td>{std.studentName}</td>
        <td>
          <button onClick={this.updateStatus()} className={classnames("btn", disBtn)}>
            {status}
          </button>
        </td>
        <td>{gender}</td>
        <td>
          <button type="button" onClick={this.onClickToEdit()} className="btn btn-success mr-1 mt-1">Edit</button>
          <button type="button" onClick={this.onClickToDel()} className="btn btn-danger mr-1 mt-1">Delete</button>
          <button type="button" onClick={this.view()} className="btn btn-info mt-1">Info</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toggleAndCloseForm : state.toggleAndCloseForm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    toggleFormEdit : () => {
      dispatch(actions.toggleFormEdit());
    },
    toggleFormInfo : () => {
      dispatch(actions.toggleFormInfo());
    },
    onUpdateStatus : (id) => {
      dispatch(actions.onUpdateStatus(id));
    },
    delStudent: (id) => {
      dispatch(actions.delStudent(id));
    },
    closeForm : () => {
      dispatch(actions.closeForm());
    },
    editInfoStudent: (student) => {
      dispatch(actions.editInfoStudent(student));
    },
    viewInfoStudent: (student) => {
      dispatch(actions.viewInfoStudent(student));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ListStudent);