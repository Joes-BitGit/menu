import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = (props) => {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      {props.children}
    </MenuContext.Provider>
  );
};
