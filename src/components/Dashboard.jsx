import React from "react";
import "./Dashboard.css";
import image from "../assets/CollegeImage.jpg";

export default function Dashboard() {
    return (
        <div className="dashboard">

            <div className="banner">
                <img src={image} alt="college" />
            </div>

            <div className="cards">

                <div className="card">Total Students</div>
                <div className="card">Total Faculty</div>
                <div className="card">Departments</div>
                <div className="card">Upcoming Exams</div>

            </div>

        </div>
    );
}
