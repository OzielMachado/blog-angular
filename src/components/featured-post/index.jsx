import React from "react";
import {Link} from "react-router-dom";

import "./styles.css";

export default function FeaturedPost() {
    return (
        <div className="featured-post-container">
            <div>
                <img src="https://www.grupotecnofix.com.br/wp-content/uploads/2020/04/landscape-mountains-sky-4843193.jpg" />
            </div>

            <div>
                <p>July 24, 2020</p>

                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ex in hic enim quis saepe placeat, exercitationem inventore reprehenderit nihil assumenda nostrum sunt commodi, dolore libero ratione, quo distinctio ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eveniet ad. Cum repellat aperiam laudantium numquam nam, dolor culpa consequatur, adipisci beatae magnam id. Facilis nihil aperiam veritatis est ullam.
                </p>
            </div>
        </div>
    );
}