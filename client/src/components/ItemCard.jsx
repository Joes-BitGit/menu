import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import MenuGenerator from "../apis/MenuGenerator";
import { MenuContext } from "../context/MenuContext";

import Modal from "./Modal.jsx";

const ItemCard = (props) => {
  const [show, setShow] = useState(false);
  let history = useHistory();
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const handleDeleteItem = async (id) => {
    try {
      setShow(false);
      await MenuGenerator.delete(`/${id}`);
      alert("Item has been deleted");
      setMenuItems(
        menuItems.filter((menuItem) => {
          return menuItem.item_id !== id;
        })
      );
    } catch (err) {
      console.log("ERR, handleDeleteItem: ", err);
    }
  };
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        handleClose={hideModal}
        handleDelete={() => handleDeleteItem(props.id)}
      >
        <p>Are you sure you would like to delete this item?</p>
      </Modal>
      <button onClick={() => history.push(`/${props.id}/update`)}>EDIT</button>
      <button onClick={showModal}>X</button>
      <div>Name: {props.name}</div>
      <div>Category: {props.category}</div>
      <div className="">SIZE: {props.size} </div>
      <div className="">price: {props.price}</div>
      <br />
    </>
  );
};

export default ItemCard;
