import React from "react";
import "./Contact.css";

const name = "Sophie Cunningham";
const isOnline = true;

function Contact() {
  return (
    <figure className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/95.jpg"
        alt="Sophie Cunningham"
      />

      <div>
        <div className="name">{name}</div>
        <div className="status">
          <span
            className={isOnline ? "status-online" : "status-offline"}
          ></span>
          <p className="status-text">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>
    </figure>
  );
}

export default Contact;
