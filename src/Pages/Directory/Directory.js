import React from 'react';
import { NavBar } from '../../Components/NavBar/NavBar';
import { EmployeeTable } from '../../Components/EmployeeTable/EmployeeTable';
import './styles.css';

export function Directory() {
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
            <EmployeeTable />
        </div>
    )
};