import React, { Component } from 'react';
import SltStatusAndSearchName from './SltStatusAndSearchName';
import ListStudents from './ListStudents';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class InforStudents extends Component {
  componentWillMount(){
    this.props.InfoStudents();
  }

  render() {
    let {
      infoStudents,
      filter,
      by,
      keyWord
    } = this.props;
    if (filter) {
      if (filter.name) {
        infoStudents = infoStudents.filter((val) => {
          return val.studentName.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
        });
      }
      infoStudents = infoStudents.filter((val) => {
        if (filter.status === -1) {
          return val;
        }
        else {
          return val.status === (filter.status === 1 ? true : false);
        }
      });
    }
    if (keyWord) {
      infoStudents = infoStudents.filter((val) => {
        return val.studentName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
      });
    }

    if (by.name === 'name') {
      infoStudents.sort((a, b) => {
        if (a.studentName > b.studentName) {
          return by.value;
        }
        else if (a.studentName < b.studentName) {
          return -by.value;
        }
        else {
          return 0;
        }
      })
    }
    else if (by.name === 'status') {
      infoStudents.sort((a, b) => {
        if (a.status > b.status) {
          return -by.value;
        }
        else if (a.status < b.status) {
          return by.value;
        }
        else {
        
          return 0;
        }
      })
    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Gender</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
        <tbody>
          <SltStatusAndSearchName/>  
          
          {infoStudents.map((std,index)=>
            <ListStudents
              key={index} 
              std={std} 
            />
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    infoStudents : state.students,
    filter : state.filterNameAndStatus,
    by : state.sortNameOrStatus,
    keyWord : state.searchKeyWord
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    InfoStudents : () => {
      dispatch(actions.infoStudents());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (InforStudents);