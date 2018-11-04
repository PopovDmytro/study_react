import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top justify-content-between">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/movies" className="nav-link" activeClassName="active" >Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/customers" className="nav-link" activeClassName="active" >Customers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/rentals" className="nav-link" activeClassName="active" >Rentals</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="login-block d-flex">
                    <NavLink to="/login" className="nav-link" activeClassName="active" >
                        <i className="fa fa-sign-in"></i>
                    </NavLink>
                    <NavLink to="/register" className="nav-link" activeClassName="active" >
                        <i className="fa fa-user-plus"></i>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;