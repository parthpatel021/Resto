import React from "react";
import "../../CSS/Home.css";

function Slide(props){
    return (
        <div className="swiper-slide slide">
            <div className="content">
                <span>our special dish</span>
                <h3>{props.name}</h3>
                <p>{props.about}</p>
                <a href="#" className="btn">order now</a>
            </div>
            <div className="image">
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}

export default Slide;