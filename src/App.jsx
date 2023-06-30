import React from "react";
import Header from"./Components/Header Components/Header";
import Home from "./Components/Home Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu Components/Menu";
import Review from "./Components/Review Components/Review";
import Order from "./Components/Order Components/Order";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Menu />
      <Review />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
