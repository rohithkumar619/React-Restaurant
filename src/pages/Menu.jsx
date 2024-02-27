import React from "react";
import NavBar from "../components/NavBar";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <NavBar />
      <h1 className="menutitle">Our Menu</h1>
      <div className="menulist">
        {MenuList.map((item, key) => {
          return (
            <MenuItem image={item.image} name={item.name} price={item.price} />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
