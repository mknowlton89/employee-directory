import React from 'react';
import './styles.css'

export function EmployeeTable({ employees, setEmployeeList, originalEmployeeList }) {

    // console.log(props);
    function handleSortFunction(event) {
        if (event.target.name === "email") {
            let sortedList = employees.sort((a, b) => a.email.localeCompare(b.email));
            setEmployeeList(sortedList);
        }
    };

    console.log(originalEmployeeList);

    return (
        <div className="employeeTableContainer">
            <table className="table">
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email <button name="email" onClick={handleSortFunction}>^</button></th>
                    <th>DOB</th>
                </tr>
                {employees.length > 0 ? employees.map((employeeData, index) => (
                    <tr key={index}>
                        <td><img src={employeeData.picture.thumbnail} /></td>
                        <td>{employeeData.name.first} {employeeData.name.last}</td>
                        <td>{employeeData.email}</td>
                        <td>{employeeData.phone}</td>
                    </tr>
                )) : <div className="table-loading">No Employee's Found</div>}
            </table>
        </div>
    )
};