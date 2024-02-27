import React from "react";
import NavBar from "../components/NavBar";
import Pizzaleft from "../assets/menu/pizzaLeft.jpg";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="contact">
        <div className="leftone">
          <img className="pizzaleft" src={Pizzaleft} />
        </div>
        <div className="rightone">
          <h1>Contact Us</h1>
          <form id="contactform" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter Full Name..." type="text" />
            <label htmlFor="email">Email </label>
            <input name="email" placeholder="Enter Email..." type="text" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter meaasge"
              name="message"
              required
            ></textarea>
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
