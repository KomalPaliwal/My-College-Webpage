import React from "react";
import "./navbar.css";

export default function Navbar({ toggleSidebar }) {
    return (
        <div className="navbar">

            <button className="menu-btn" onClick={toggleSidebar}>
                <i className="fa fa-bars"></i>
            </button>

            <h1 className="nav-title">Vidya Bhawan Polytechnic College</h1>

            <div className="nav-right">
                <i className="fa fa-user-circle"></i>
                <i className="fa fa-ellipsis-v"></i>
            </div>
        </div>
    );
}
