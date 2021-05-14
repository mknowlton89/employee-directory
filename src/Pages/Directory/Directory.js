import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { NavBar } from '../../Components/NavBar/NavBar';
import { EmployeeTable } from '../../Components/EmployeeTable/EmployeeTable';
import './styles.css';

export function Directory() {
    const [employeeList, setEmployeeList] = useState([])

    useEffect(() => {
        API.getEmployees()
            .then((res) => {
                setEmployeeList(res.data.results);
            })
            .then(console.log(employeeList))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <NavBar />
            <div className="search-container">
                <h2 id="searchHeader">Search For An Employee</h2>
                <input
                    className="searchInput"
                    type="text"
                    name="search"
                    placeholder="Enter an employee's name"
                />
            </div>
            <EmployeeTable employees={employeeList} />
        </div>
    )
};