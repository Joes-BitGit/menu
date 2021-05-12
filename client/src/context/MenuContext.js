import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = (props) => {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (item) => {
    setMenuItems([...menuItems, item]);
  };

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems, addMenuItem }}>
      {props.children}
    </MenuContext.Provider>
  );
};
