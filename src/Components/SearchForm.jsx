import React from "react";

function SearchForm(props){
    return (
        <form action="" id="search-form" className={props.isSearchClicked?"active":""}>
            <input type="search" placeholder="Search here..." name="" id="search-box" />
            <label htmlFor="search-box" className="fas fa-search"></label>
            <i className="fas fa-times" id="close" onClick={() => {props.resetIsSearchClicked()}}></i>
        </form>
    );
}

export default SearchForm;