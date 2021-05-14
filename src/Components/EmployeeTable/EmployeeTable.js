import React from 'react';
import './styles.css'

export function EmployeeTable({ employees }) {

    // console.log(props);
    function handleSortFunction(type) {
        alert("handleSortFunction was called");
    };

    return (
        <div className="employeeTableContainer">
            <table className="table">
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email <span value="email"onClick={handleSortFunction()}>^</span></th>
                    <th>DOB</th>
                </tr>
                {employees.length > 0 ? employees.map((employeeData, index) => (
                    <tr key={index}>
                        <td><img src={employeeData.picture.thumbnail}/></td>
                        <td>{employeeData.name.first} {employeeData.name.last}</td>
                        <td>{employeeData.email}</td>
                        <td>{employeeData.phone}</td>
                    </tr>
                )) : <div className="table-loading">No Employee's Found</div>}
            </table>
        </div>
    )
};