import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-md bg-primary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">Client Panel</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarMain"
                    >
                        <i className="navbar-toggler-icon" />
                    </button>
                    <div id="navbarMain" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

AppNavbar.propTypes = {};

export default AppNavbar;