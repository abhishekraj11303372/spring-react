import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee = (event) => {
        this.props.history.push("/add-employee");
    }

  render() {
    return (
      <div>
        <h2 className='text-center'>Employees List</h2>
        <div className='row'>
            <button className='btn btn-primary w-25' onClick={this.addEmployee}>Add Employee</button>
        </div>
        <div className='row'>
            <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Lirst Name</th>
                        <th>Employee Email</th>
                        <th>Employee Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employees => 
                            <tr key = {employees.id}>
                                <td>{employees.firstName}</td>
                                <td>{employees.lastName}</td>
                                <td>{employees.emailId}</td>
                                <td>
                                    <button onClick={() => this.editEmployee(employees.id)} className="btn btn-info">Update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}
