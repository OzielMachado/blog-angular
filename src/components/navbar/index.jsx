import React from "react";

import "./style.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <a href="/" className="logo">
                    <h3>Meu Blog</h3>
                </a>
            </div>
            <div>
                <a href="/" className="nav-link">Home</a>
                <a href="/post" className="nav-link">Sobre</a>
                <a href="/contact" className="nav-link">Contato</a>
                <a href="/Culture" className="nav-link">Cultura</a>
            </div>
        </nav>
    );
}