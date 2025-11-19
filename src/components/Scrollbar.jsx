import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./scroll.css";

export default function Scrollbar({ isOpen }) {
    return (
        <div className={`layout ${isOpen ? "open" : "closed"}`}>
            
            <aside className="sidebar">
                <h2 className="sidebar-title">Menu</h2>
                <NavLink to="dashboard" className="link">Dashboard</NavLink>
                <NavLink to="studentSection" className="link">Student Section</NavLink>
                <NavLink to="examSection" className="link">Exam Section</NavLink>
                <NavLink to="faculty" className="link">Faculty</NavLink>
                <NavLink to="form" className="link">Form</NavLink>
            </aside>

            <main className="content">
                <Outlet />
            </main>

        </div>
    );
}
