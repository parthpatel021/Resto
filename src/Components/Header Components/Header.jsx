import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SearchForm from "./SearchForm";
import "../../CSS/Header.css";import { useLocation } from 'react-router-dom'

function HeaderView() {
  const location = useLocation();
  console.log(location.pathname);
  return <span>Path : {location.pathname}</span>
}


function Header(){
    const [isActive,setIsActive] = useState(false);
    const [isSearchClicked,setIsSearchClicked] = useState(false);
    

    window.onscroll = () => {
        setIsActive(false);
    }

    return (
      <>
        <header>
            <Link to="/" className="logo"><i className="fas fa-utensils"></i>resto.</Link>
            <nav className="navbar" 
                style={{clipPath: isActive?"polygon(0 0,100% 0,100% 100%,0 100%)":""}}
            >
                <Link className="active" to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/menu">menu</Link>
                <Link to="/review">review</Link>
            </nav>

            <div className="icons">
                <i className={isActive ? "fas fa-bars fa-times": "fas fa-bars"} id="menu-bars" 
                    onClick={() => setIsActive(!isActive)}
                ></i>
                <i className="fas fa-search" id="search-icon" onClick={() => setIsSearchClicked(true)}></i>
                <Link to="/" className="fas fa-heart"> </Link>
                <Link to="/cart" className="fas fa-shopping-cart"> </Link>
            </div>
        </header>
        {HeaderView}
        <SearchForm isSearchClicked={isSearchClicked} resetIsSearchClicked={() => (setIsSearchClicked(false))}/>

      </>
    );
}

export default Header;