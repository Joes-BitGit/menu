import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard.jsx";
import MenuGenerator from "../apis/MenuGenerator.js";

const ItemTable = () => {
  const [menuItems, setMenuItems] = useState([]);
  // fetch from backend server
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await MenuGenerator.get("/");
        // console.log(response);
        setMenuItems(response.data.menu_item);
      } catch (err) {
        console.log("ERR, ItemTable.jsx: ", err);
      }
    };
    fetchMenuItems();
  }, []);

  // Need to be sable to handle multiple item card coming from ItemCard component
  return (
    <div>
      <ol>
        {menuItems &&
          menuItems.map((cardDetail) => {
            return (
              <li key={cardDetail.item_id}>
                <ItemCard
                  name={cardDetail.item}
                  price={cardDetail.price}
                  category={cardDetail.category}
                  size={cardDetail.size}
                />
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default ItemTable;
