import React from "react";
import {Link} from "react-router-dom";

import "./styles.css";

export default function Post({ post }) {
    console.log(post);
    return (
        <div className="post-container">
            <div>
                <img 
                    className="post-image" 
                    src={post?.hero?.data?.attributes?.formats?.medium?.url} 
                />
            </div>

            <div>
                <p className="post-date">{post.date}</p>
                <Link to="#">
                    <p className="post-title">{post.title}</p>
                </Link>
                <p className="post-description">{post.description}</p>

            </div>
        </div>
    );
}