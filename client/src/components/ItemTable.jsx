import React, { useContext, useEffect } from "react";
import ItemCard from "./ItemCard.jsx";
import MenuGenerator from "../apis/MenuGenerator";
import { MenuContext } from "../context/MenuContext.js";
import useIsMount from "./useIsMount.jsx";

const ItemTable = (props) => {
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const isFirstRender = useIsMount();
  useEffect(() => {
    if (isFirstRender) {
      // FETCH FROM DB
      const fetchMenuItems = async () => {
        try {
          const response = await MenuGenerator.get("/");
          console.log("ITEMTABLE: ", response.data);
          setMenuItems(response.data.menu_item);
        } catch (err) {
          console.log("ERR, useMenuData.jsx: ", err);
        }
      };
      fetchMenuItems();
    } else {
      // this works, but has a bug when retyping in search
      // menuItems arr gets cleared when the item is not found
      // ruining the data

      // Next up think how to save the context data but still be able to manipulate
      // data that is on the screen without affect it
      setMenuItems(
        menuItems.filter((dish) => {
          return dish.item.includes(props.item);
        })
      );
    }
  }, [props.item]);

  // Need to be able to handle multiple item card coming from ItemCard component
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
