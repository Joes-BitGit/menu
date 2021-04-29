import React from "react";

const ItemCard = (props) => {
  return (
    <>
      <button>EDIT</button>
      <button>X</button>
      <div>Name: {props.name}</div>
      <div>Category: {props.category}</div>
      <div className="">SIZE: {props.size} </div>
      <div className="">price: {props.price}</div>
      <br />
    </>
  );
};

export default ItemCard;
