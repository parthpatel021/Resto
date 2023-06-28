import React, { useState } from "react";
import SearchForm from "./SearchForm";

function Header(){
    const [isActive,setIsActive] = useState(false);
    const [isSearchClicked,setIsSearchClicked] = useState(false);

    window.onscroll = () => {
        setIsActive(false);
    }
    return (
      <>
        <header>
            <a href="http://localhost:3000/" className="logo"><i className="fas fa-utensils"></i>resto.</a>
            <nav className="navbar" 
                style={{clipPath: isActive?"polygon(0 0,100% 0,100% 100%,0 100%)":""}}
            >
                <a className="active" href="#home">home</a>
                <a href="#dishes">dishes</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#review">review</a>
                <a href="#order">order</a>
            </nav>

            <div className="icons">
                <i className={isActive ? "fas fa-bars fa-times": "fas fa-bars"} id="menu-bars" 
                    onClick={() => setIsActive(!isActive)}
                ></i>
                <i className="fas fa-search" id="search-icon" onClick={() => setIsSearchClicked(true)}></i>
                <a href="http://localhost:3000/" className="fas fa-heart"> </a>
                <a href="http://localhost:3000/" className="fas fa-shopping-cart"> </a>
            </div>
        </header>
        <SearchForm isSearchClicked={isSearchClicked} resetIsSearchClicked={() => (setIsSearchClicked(false))}/>

      </>
    );
}

export default Header;