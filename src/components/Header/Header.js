import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "./Header.css";

function Header(){
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="nav"><Link className="nav-link">Home</Link></div>
                <div className="nav"><Link className="nav-link">Mentorship</Link></div>
                <div className="nav"><Link className="nav-link">Employment</Link></div>
                <div className="nav"><Link className="nav-link">Resources</Link></div>
                <div className="nav"><Link className="nav-link"><b>Sign In</b></Link></div>
            </div>
        </React.Fragment>
    )
}

export default Header;