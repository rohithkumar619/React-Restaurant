import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import banner from "../assets/banner2.jpg";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="container">
        <img className="banner" src={banner} />
        <h1 className="slogan">Have it Your Way</h1>
        <h2 className="logoname">Rohith Pizzas</h2>
        <Link className="orderlink" to="/Menu">
          <button className="orderbutton">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
