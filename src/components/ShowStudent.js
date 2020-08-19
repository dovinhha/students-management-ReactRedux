import React, { Component } from 'react';
import Add from "./Add";
import SearchKey from './SearchKey';
import Sort from './Sort';
import InforStudents from './InforStudents';
import classnames from 'classnames';
import '../App.css';
import { connect } from 'react-redux';

class ShowStudent extends Component {
  render() {
    const { toggleAndCloseForm } = this.props;
    return (
      <div className={classnames({
        "col-sm-12 col-md-12 col-lg-12 col-xl-12": toggleAndCloseForm.disPlayFormAdd === false
          && toggleAndCloseForm.disPlayFormEdit === false
          && toggleAndCloseForm.disPlayFormInfo === false
      },
        { "col-sm-12 col-md-8 col-lg-8 col-xl-8": toggleAndCloseForm.disPlayFormAdd === true },
        { "col-sm-12 col-md-8 col-lg-8 col-xl-8": toggleAndCloseForm.disPlayFormEdit === true },
        { "col-sm-12 col-md-8 col-lg-8 col-xl-8": toggleAndCloseForm.disPlayFormInfo === true }
      )}
      >
        <Add />
        <div className="row">
          <SearchKey />
          <Sort />
        </div>
        <InforStudents />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toggleAndCloseForm: state.toggleAndCloseForm
  }
}

export default connect(mapStateToProps, null)(ShowStudent);