import React, { useState } from "react";
import SearchForm from "./SearchForm";
import "../../CSS/Header.css";

function Header(){
    const [isActive,setIsActive] = useState(false);
    const [isSearchClicked,setIsSearchClicked] = useState(false);
    
    // let section = document.querySelectorAll("section");
    // let navLinks = document.querySelectorAll("header .navbar a");


    window.onscroll = () => {
        setIsActive(false);

        // section.forEach(sec =>{
        //     let top = window.scrollY;
        //     let height = sec.offsetHeight;
        //     let offset = sec.offsetTop - 150;
        //     let id = sec.getAttribute("id");
      
        //     if(top => offset && top < offset + height){
        //       navLinks.forEach(links => {
        //         links.classList.remove("active");
        //         document.querySelector("header .navbar a[href*="+id+"]").classList.add("active");
        //       });
        //     }
        // });
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