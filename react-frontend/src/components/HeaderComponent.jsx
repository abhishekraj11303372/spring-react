import React, { Component } from 'react'

export default class HeaderComponent extends Component {

  homeEmployee = (event) => {
    this.props.history.push("/employees");
 }

  render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark p-3'>
                <div><a href='http://localhost:3000/employees' className='navbar-brand'>Employee Management App</a></div>
            </nav>
        </header>
      </div>
    )
  }
}
