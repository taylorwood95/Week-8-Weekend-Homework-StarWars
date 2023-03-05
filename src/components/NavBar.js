import React from "react";
import { Link } from "react-router-dom"
import "./nav-bar.css"

const NavBar = () => {
    return (
        <ul className="nav-bar">
            <p className="home-link">
                <Link  to="/">Home</Link>
            </p>
            <p>
                <Link to="/starships">Starships</Link>
            </p>
        </ul>
    )
}


export default NavBar