import React from "react";
import RatingStarts from "../../RatingStarts";
import "../../../CSS/Home.css";

function DishItem(props){
    var rat = props.rating;

    return(
        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <div className="stars">
                <RatingStarts rating={props.rating}/>
            </div>
            <span>{props.price+"₹"}</span>
            <a href="/" className="btn">add to cart</a>
        </div>
    );
}

export default DishItem;