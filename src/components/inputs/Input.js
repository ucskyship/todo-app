import React from "react";
import './Input.css';

const Input = ({data}) => {
  return (
    <div className="input-div">
      <p  className="s-n" type="number">{data.id}</p>
      <p className="event" >{data.event}</p>
      <p className="date-time" >{data.date}</p>
      <p className="date-time" >{data.time}</p>
    </div>
  );
};

export default Input;
