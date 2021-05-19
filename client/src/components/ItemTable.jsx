import React, { useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard.jsx";
import MenuGenerator from "../apis/MenuGenerator";
import { MenuContext } from "../context/MenuContext.js";
import useIsMount from "./useIsMount.jsx";

const ItemTable = (props) => {
  const { menuItems, setMenuItems } = useContext(MenuContext);
  // only temp menu will change when prop.items changes
  const [tempMenu, setTempMenu] = useState([]);

  const isFirstRender = useIsMount();
  useEffect(() => {
    if (isFirstRender) {
      // FETCH FROM DB
      const fetchMenuItems = async () => {
        try {
          const response = await MenuGenerator.get("/");
          // console.log("ITEMTABLE: ", response.data);
          setTempMenu(response.data.menu_item);
          setMenuItems(response.data.menu_item);
        } catch (err) {
          console.log("ERR, useMenuData.jsx: ", err);
        }
      };
      fetchMenuItems();
    } else {
      // initially menuItem(context) has all menu items
      // also props.item is "" initially
      // so by using context state instead of temp state
      // i am able to reprint the data on the screen, since context never changes
      // (i don't use setMenuItems)
      console.log("tempMENU: ", tempMenu);
      setTempMenu(
        menuItems.filter((dish) => {
          return dish.item.includes(props.item);
        })
      );
    }
    // only needs to be rendered when the user input changes
  }, [props.item]);

  // Need to be able to handle multiple item card coming from ItemCard component
  return (
    <div>
      <ol>
        {tempMenu &&
          tempMenu.map((cardDetail) => {
            return (
              <li key={cardDetail.item_id}>
                <ItemCard
                  id={cardDetail.item_id}
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
