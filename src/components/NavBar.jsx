import React from "react";
import Logo from "../assets/pizzaLogo.png";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="leftside">
        <img className="logo" src={Logo} />
        <p className="logoName">Rohith Pizzas</p>
      </div>
      <div className="rightside">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
