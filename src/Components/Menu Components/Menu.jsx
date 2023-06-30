import React from "react";
import menuData from "./menuData";
import MenuCard from "./MenuCard";
import "../../CSS/Menu.css";

function Menu(){
    return(
        <>
            <section className="menu" id="menu">
                <h3 className="sub-heading">our menu</h3>
                <h1 className="heading">today's speciality</h1>

                <div className="box-container">
                    {menuData.map((item,index) => {
                        return(<MenuCard 
                            key = {index}
                            id = {index}
                            name = {item.name}
                            about = {item.about}
                            img = {item.img}
                            rating = {item.rating}
                            price = {item.price}
                        />
                        );
                    })}
                </div>

            </section>
        </>
    );
}

export default Menu;