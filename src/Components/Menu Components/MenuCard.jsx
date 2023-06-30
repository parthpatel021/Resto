import React from "react";
import { Link } from 'react-router-dom';
import RatingStarts from "../RatingStarts";
import "../../CSS/Menu.css";

function MenuCard(props){
    return(
        <>
            <div className="box">
                <div className="image">
                    <img src={props.img} alt="" />
                    <Link to="/" classNa    me="fas fa-heart"></Link>
                </div>
                <div className="content">
                    <div className="stars">
                        <RatingStarts rating={props.rating} />    
                    </div>
                
                    <h3>{props.name}</h3>
                    <p>{props.about}</p>
                    <Link href="/" className="btn">add to cart</Link>
                    <span className="price">{props.price+"₹"}</span>
                </div>
            </div>
        </>
    );
}

export default MenuCard;