import React from 'react';
import './styles.css'

export function EmployeeTable({ employees, setEmployeeList, originalEmployeeList }) {

    function handleSortFunction(event) {
        if (event.target.name === "email") {
            let sortedList = [...employees].sort((a, b) => a.email.localeCompare(b.email));
            setEmployeeList(sortedList);
        } else if (event.target.name === "name") {
            let sortedList = [...employees].sort((a, b) => a.name.first.localeCompare(b.name.first));
            setEmployeeList(sortedList);
        }
    };

    console.log(employees);

    return (
        <div className="employeeTableContainer">
            <table className="table">
                <tr id="header">
                    <th>Headshot</th>
                    <th>Name<button className="sortBtn" name="name" onClick={handleSortFunction}>^</button></th>
                    <th>Email <button className="sortBtn" name="email" onClick={handleSortFunction}>^</button></th>
                    <th>Phone Number</th>
                </tr>
                {employees.length > 0 ? employees.map((employeeData, index) => (
                    <tr key={index}>
                        <td><img src={employeeData.picture.thumbnail} alt={"Headshot of " + employeeData.name.first + " " + employeeData.name.last} /></td>
                        <td>{employeeData.name.first} {employeeData.name.last}</td>
                        <td>{employeeData.email}</td>
                        <td>{employeeData.phone}</td>
                    </tr>
                )) : <div className="table-loading">No Employee's Found</div>}
            </table>
        </div>
    )
};