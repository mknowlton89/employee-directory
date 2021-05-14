import React from 'react';
import './styles.css'

export function EmployeeTable(props) {

    console.log(props);

    return (
        <div className="employeeTableContainer">
            <table className="table">
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                {props.employees.length > 0 ? props.employees.map((employeeData, index) => (
                    <tr key={index}>
                        <td><img src={employeeData.picture.thumbnail}/></td>
                        <td>{employeeData.name.first} {employeeData.name.last}</td>
                        <td>{employeeData.email}</td>
                        <td>{employeeData.phone}</td>
                    </tr>
                )) : <div>No Employees Found</div>}
            </table>
        </div>
    )
};