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
            // .then(console.log(employeeList))
            .catch(err => console.log(err))
    }, []);

    const handleListSort = (event) => {
        // console.log(event.target.value);
        // console.log(employeeList);
        let originalList = employeeList;
        console.log(event.target.value);

        if (event.target.value === "") {
            setEmployeeList(originalList);
            return;
        }

        let sortedList = employeeList.filter(employee => {
            if (employee.name.first.includes(event.target.value) || employee.name.last.includes(event.target.value)) {
                return true;
            }
        });

        setEmployeeList(sortedList);
        // console.log(sortedList);
    };


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
                    onChange={handleListSort}
                />
            </div>
            <EmployeeTable employees={employeeList}
                setEmployeeList={setEmployeeList} />
        </div>
    )
};