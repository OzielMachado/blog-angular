import React from "react";

import profileImage from "../../assets/images/profile.png";
import "./styles.css";

export default function AuthorBadge() {
    return (
        <div className="author-badge-container">
            <img src={profileImage} className="author-badge-image"/>
            <div>
                <h3>Oziel Machado</h3>
                <p>Programador Júnior</p>
            </div>
        </div>
    );
}