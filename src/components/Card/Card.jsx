import React from "react";
import "./Card.css";

const Card = ({logo, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={logo} alt="" />
      
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
