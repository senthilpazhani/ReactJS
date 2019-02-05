import React from 'react';
import EmpRow from './Components/ChildEmployeeTable';
class EmployeeProfile extends React.Component{
    constructor(){
        super();
        this.state ={ employees: [{Name:'psk',Dept:'Finance',Location:'Chennai'},
            {Name:'senthil',Dept:'Accounts',Location:'Chennai'},
            {Name:'senthilpsk',Dept:'Marketing',Location:'Chennai'}]
        };    
    }
    render(){
        return (<div className="App">
            <table border="1">
                <thead><th><td>Name</td><td>Dept</td><td>Location</td></th></thead>
                <tbody>
                {this.state.employees.map(emp=><EmpRow employee={emp}></EmpRow>)}
                </tbody>
            </table>
        </div>);
    }
}

export default EmployeeProfile;