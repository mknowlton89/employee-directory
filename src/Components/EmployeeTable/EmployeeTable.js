import React from 'react';
import './styles.css'

export function EmployeeTable(props) {
    return(
        <div className="employeeTableContainer">
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Phone Number</th>
                </tr>
                <tr>
                    <td>Michael</td>
                    <td>Jr Software Engineer</td>
                    <td>Engineering</td>
                    <td>770-843-4662</td>
                </tr>
                <tr>
                    <td>Heather</td>
                    <td>Sr Software Engineer</td>
                    <td>Special Projects</td>
                    <td>770-843-4663</td>
                </tr>
                <tr>
                    <td>Cameron</td>
                    <td>BehBeh</td>
                    <td>N/A</td>
                    <td>770-843-4664</td>
                </tr>
            </table>
        </div>
    )
};