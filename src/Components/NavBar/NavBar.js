import React from 'react';
import './styles.css';

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navBarColor">
            <div className="container-fluid">
                <p className="navbar-brand header" style={
                    {color: "white",
                    fontSize: "30px"}}>
            Employee Directory</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
        </nav >
    )
};