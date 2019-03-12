import React from "react";
import ReactDOM from "react-dom";
// import logo from "./images/logo.jpg"; // relative path to image
// <img src={logo} alt="{logo}" />

function ContactCard(props) {
  console.log(props);
  return (
    <div className="flex-item">
      <img src={props.contact.imgURL} alt="hello" />
      <h3>Name:{props.contact.name}</h3>
      <p>Phone:{props.contact.phone}</p>
      <p>Email:{props.contact.email}</p>
    </div>
  );
}

export default ContactCard;
