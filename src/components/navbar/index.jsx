import React from "react";
import {Link} from "react-router-dom";

import "./styles.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <Link to="/" className="logo">Meu Blog</Link>
            </div>
            <div>

                <Link to="/" className="nav-link">Home</Link>
                <Link to="/post" className="nav-link">Sobre</Link>
                <Link to="/contact" className="nav-link">Contato</Link>
                <Link to="/Culture" className="nav-link">Cultura</Link>
            </div>
        </nav>
    );
}