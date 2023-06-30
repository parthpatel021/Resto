import React from "react";
import RatingStarts from "../RatingStarts";
import "../../CSS/Menu.css";

function MenuCard(props){
    return(
        <>
            <div className="box">
                <div className="image">
                    <img src={props.img} alt="" />
                    <a href="#" className="fas fa-heart"></a>
                </div>
                <div className="content">
                    <div className="stars">
                        <RatingStarts rating={props.rating} />    
                    </div>
                
                    <h3>{props.name}</h3>
                    <p>{props.about}</p>
                    <a href="#" className="btn">add to cart</a>
                    <span className="price">{props.price+"₹"}</span>
                </div>
            </div>
        </>
    );
}

export default MenuCard;