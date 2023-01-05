import React from "react";

export default function Card(props) {
  return (
    <div className="card" onClick={props.handleChange}>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
}
