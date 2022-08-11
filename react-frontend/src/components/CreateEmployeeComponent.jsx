import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService.js';

export default class CreateEmployeeComponent extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    
    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }
    
    saveEmployee = (event) => {
        event.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId 
        };

        console.log('employee => ' + JSON.stringify(employee));
        
        

        EmployeeService.createEmployees(employee).then(res => {this.props.history.push('/employee');});
        
    }

    cancelEmployee = (event) => {
       this.props.history.push("/employees");
    }

  render() {
    return (
      <div>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>Add Employee</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label>First Name:</label>
                            <input placeholder='First Name' name='firstName' value={this.state.firstName} onChange={this.changeFirstNameHandler} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Last Name:</label>
                            <input placeholder='Last Name' name='lastName' value={this.state.lastName} onChange={this.changeLastNameHandler} className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input placeholder='Email' name='emailId' value={this.state.emailId} onChange={this.changeEmailIdHandler} className='form-control'/>
                        </div>

                        <button className='btn btn-success my-2' onClick={this.saveEmployee}>Save</button>
                        <button className='btn btn-danger mx-2 my-2' onClick={this.cancelEmployee}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
