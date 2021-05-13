import React from 'react';
import { NavBar } from '../../Components/NavBar/NavBar';
import { SearchBar } from '../../Components/SearchBar/SearchBar';
import { EmployeeTable } from '../../Components/EmployeeTable/EmployeeTable';

export function Directory () {
    return(
        <div>
            <NavBar />
            <SearchBar />
            <EmployeeTable />
        </div>
    )
};