import React, { useContext } from "react";
import { useHistory } from "react-router";
import MenuGenerator from "../apis/MenuGenerator";
import { MenuContext } from "../context/MenuContext";

const ItemCard = (props) => {
  let history = useHistory();
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const handleDeleteItem = async (id) => {
    try {
      const del = await MenuGenerator.delete(`/${id}`);
      // setMenuItems(
      //   menuItems.filter((menuItem) => {
      //     return menuItem.item_id !== id;
      //   })
      // );
      history.push(`/`);
      // console.log(history.location.pathname);
    } catch (err) {
      console.log("ERR, handleDeleteItem: ", err);
    }
  };

  return (
    <>
      <button onClick={() => history.push(`/${props.id}/update`)}>EDIT</button>
      <button onClick={() => handleDeleteItem(props.id)}>X</button>
      <div>Name: {props.name}</div>
      <div>Category: {props.category}</div>
      <div className="">SIZE: {props.size} </div>
      <div className="">price: {props.price}</div>
      <br />
    </>
  );
};

export default ItemCard;
