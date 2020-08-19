import React, { Component } from 'react';
import classnames from 'classnames';
import close from './image/close.svg';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      studentName: '',
      age: '',
      phone: '',
      homeTown: '',
      sltGender: false,
      status: true
    }
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onClickToCancel = this.onClickToCancel.bind(this);
  }

  onChangeHandle(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;//checkbox--->target.checked
    this.setState({
      [name]: value
    });
  }

  onSubmitHandle(event) {
    alert('Successful Manipulation. ^.^');
    this.props.onSaveStudent(this.state);
    this.setState({
      id: '',
      studentName: '',
      age: '',
      phone: '',
      homeTown: '',
      sltGender: false,
      status: true
    });
    this.props.closeForm();
    event.preventDefault();
  }

  onClickToCancel() {
    if(this.props.toggleAndCloseForm.disPlayFormAdd){
      this.setState({
        id: '',
        studentName: '',
        age: '',
        phone: '',
        homeTown: '',
        sltGender: false,
        status: true
      });
    }
    else {
      this.props.closeForm();
    }
  }

  onClose(){
    return () => {
      this.props.closeForm();
    }
  }

  componentWillMount() {
    const { infoStudent } = this.props;
    if (infoStudent) {
      this.setState({
        id: infoStudent.id,
        studentName: infoStudent.studentName,
        age: infoStudent.age,
        phone: infoStudent.phone,
        homeTown: infoStudent.homeTown,
        sltGender: infoStudent.sltGender,
        status: infoStudent.status
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps && 
      nextProps.infoStudent
      ) {
      this.setState({
        id: nextProps.infoStudent.id,
        studentName: nextProps.infoStudent.studentName,
        age: nextProps.infoStudent.age,
        phone: nextProps.infoStudent.phone,
        homeTown: nextProps.infoStudent.homeTown,
        sltGender: nextProps.infoStudent.sltGender,
        status: nextProps.infoStudent.status
      })
    }
    else {
      this.setState({
        id: '',
        studentName: '',
        age: '',
        phone: '',
        homeTown: '',
        sltGender: false,
        status: true
      });
    }
  }

  render() {
    const {toggleAndCloseForm,infoStudent} = this.props;
    const { studentName, age, phone, homeTown, sltGender, status } = this.state;
    let text = '';
    if (toggleAndCloseForm.disPlayFormEdit) {
      text = 'Edit Info Student';
    }
    else if (toggleAndCloseForm.disPlayFormInfo) {
      text = 'Infomation Student ';
    }
    else {
      text = 'Add Student';
    }

    return (
      <div className={classnames("col-sm-12 col-md-4 col-lg-4 col-xl-4")}>
        {(toggleAndCloseForm.disPlayFormEdit || toggleAndCloseForm.disPlayFormAdd) &&
          <ul className="list-group">
            <li className="list-group-item active">{text}
              <img onClick={this.onClose()} className="closeFormAdd" src={close} alt="close" />
            </li>
            <li className="list-group-item">
              <form onSubmit={this.onSubmitHandle}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="studentName">Name</span>
                  </div>
                  <input type="text" className="form-control"
                    name="studentName"
                    value={studentName}
                    onChange={this.onChangeHandle}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="age">Age</span>
                  </div>
                  <input type="text" className="form-control"
                    name="age"
                    value={age}
                    onChange={this.onChangeHandle}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="phone">Phone</span>
                  </div>
                  <input type="text" className="form-control"
                    name="phone"
                    value={phone}
                    onChange={this.onChangeHandle}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="phone">Home Town</span>
                  </div>
                  <input type="text" className="form-control"
                    name="homeTown"
                    value={homeTown}
                    onChange={this.onChangeHandle}
                  />
                </div>

                <div>
                  <label htmlFor="Gender">Gender:</label>
                  <select
                    onChange={this.onChangeHandle}
                    className="custom-select"
                    name="sltGender"
                    value={sltGender}
                    id="Gender"
                  >
                    <option value={false}>Female</option>
                    <option value={true}>Male</option>
                  </select>
                </div>

                {toggleAndCloseForm.disPlayFormEdit && <div>
                  <label htmlFor="status">Status:</label>
                  <select
                    onChange={this.onChangeHandle}
                    className="custom-select"
                    name="status"
                    value={status}
                    id="status"
                  >
                    <option value={true}>Learning</option>
                    <option value={false}>Leave School</option>
                  </select>
                </div>}

                <div className="mt-5">
                  <button type="submit" className="mr-1 btn btn-primary">Save</button>
                  <button type="button" onClick={this.onClickToCancel} className="btn btn-danger">Cancel</button>
                </div>
              </form>
            </li>
          </ul>}
        {toggleAndCloseForm.disPlayFormInfo &&
          <ul className="list-group">
          <li className="list-group-item list-group-item-primary"><span className="text">{text}</span>
            <img onClick={this.onClose()} className="closeFormAdd" src={close} alt="close" />
          </li>
          <li className="list-group-item list-group-item-secondary">Name : {infoStudent.studentName}</li>
          <li className="list-group-item list-group-item-success">Age : {infoStudent.age}</li>
          <li className="list-group-item list-group-item-danger">Gender : {infoStudent.sltGender ? 'Male' : 'Female'}</li>
          <li className="list-group-item list-group-item-warning">Phone : {infoStudent.phone}</li>
          <li className="list-group-item list-group-item-info">Hometown : {infoStudent.homeTown}</li>
          <li className="list-group-item list-group-item-dark">Status : {infoStudent.status ? 'Learning' : 'Leave School'}</li>
        </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toggleAndCloseForm : state.toggleAndCloseForm,
    infoStudent : state.student
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    onSaveStudent : (student) => {
      dispatch(actions.saveStudent(student));
    },
    closeForm : () => {
      dispatch(actions.closeForm());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddStudent);