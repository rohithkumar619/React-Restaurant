import React from "react";
import "../styles/MenuItem.css";
const MenuItem = ({ image, name, price }) => {
  return (
    <div className="menuitem">
      <img className="itemimage" src={image} />
      <h2 className="itemname">{name}</h2>
      <p className="itemprice">${price}</p>
    </div>
  );
};

export default MenuItem;
