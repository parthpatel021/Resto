import React from "react";
import RatingStarts from "../RatingStarts"

function ReviewCard(props){
    return(
        <>
             <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src={props.img} alt="" />
                    <div className="user-info">
                        <h3>{props.name}</h3>
                        <div className="stars">
                            <RatingStarts rating={props.rating}/>
                        </div>
                    </div>
                </div>
                <p>{props.content}</p>
            </div>
        </>
    );
}

export default ReviewCard;