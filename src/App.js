import React, { Component } from 'react';
import AddStudent from './components/AddStudent';
import ShowStudent from './components/ShowStudent';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="tal-center">Student Management</h1>
        <span className="zipline"></span>
        <br></br>
        <div className="row mar">
          {(this.props.toggleAndCloseForm.disPlayFormAdd 
            || this.props.toggleAndCloseForm.disPlayFormEdit 
            || this.props.toggleAndCloseForm.disPlayFormInfo) && 
            <AddStudent/>
          }
          <ShowStudent/>
        </div>
        <div className="alert alert-danger author" role="alert">
          by Do Vinh Ha
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toggleAndCloseForm : state.toggleAndCloseForm
  }
}

export default connect(mapStateToProps,null) (App);