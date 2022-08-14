import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    backEmployee = (event) => {
        this.props.history.push("/employees");
     }

  render() {
    return (
      <div>
        <div className='card col-md-6 offset-md-3 my-5 p-3'>
            <h3 className='text-center'>View Employee Details</h3>
            <div className='card-body'>
                <div className='formGroup'>
                    <label>Employee First Name:</label>
                    <div>{this.state.employee.firstName}</div>
                </div>
                <div className='formGroup'>
                    <label>Employee Last Name:</label>
                    <div>{this.state.employee.lastName}</div>
                </div>
                <div className='formGroup'>
                    <label>Employee Email Id:</label>
                    <div>{this.state.employee.emailId}</div>
                </div>
            </div>
            <button className='btn btn-secondary mx-2 my-2' onClick={this.backEmployee}>Back</button>
        </div>
      </div>
    )
  }
}
