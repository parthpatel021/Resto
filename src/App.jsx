import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import Header from "./Components/Header Components/Header";
import Home from "./Components/Home Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu Components/Menu";
import Review from "./Components/Review Components/Review";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart Components/Cart";


function App() {

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/menu" element={<Menu />} />
                    <Route exact path="/review" element={<Review />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
