import React from 'react';

const Navigation = ({totalCounters}) => {
    console.log('navbar - render');
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">Navbar</a>
                <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </nav>
        </div>
    );
};

export default Navigation;