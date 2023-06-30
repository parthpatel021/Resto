import React from "react";
import dishData from "./dishData";
import DishItem from "./DishItem";
import "../../../CSS/Home.css";

function Dishes(){
    return(
        <section className="dishes" id="dishes">
            <h3 className="sub-heading">our dishes</h3>
            <h1 className="heading">Popular Dishes</h1>

            <div className="box-container">
                {dishData.map((item,index) => {
                    return(
                        <DishItem 
                            key = {index}
                            name = {item.name}
                            rating = {item.rating}
                            img = {item.img}
                            price = {item.price}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Dishes;