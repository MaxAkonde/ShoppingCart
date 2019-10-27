import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Navbar</a>
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </div>

        </nav>
     );
}
 
export default NavBar;