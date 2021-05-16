import React from "react";
import { useHistory } from "react-router";

const ItemCard = (props) => {
  let history = useHistory();

  return (
    <>
      <button onClick={() => history.push(`/${props.id}/update`)}>EDIT</button>
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
