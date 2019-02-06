import React from 'react';

class ChildEmployeeTable extends React.Component{    
     
    render(){
        return (
        <tr><th><td>{this.props.employee.name}</td><td>{this.props.employee.dept}</td><td>{this.props.employee.location}</td></th></tr> );
    }
}

export default ChildEmployeeTable;