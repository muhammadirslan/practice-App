import React from "react";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <img className="img" src={props.value.image} alt="unknown"></img>
        <h1>{props.value.category}</h1>
        <h3 className="title">{props.value.title}</h3>
        <p>{props.value.description}</p>
        <h3>{props.value.price}</h3>
        <button className="btn"> Add to Cart </button>
      </div>
    </>
  );
}

export default Card;
