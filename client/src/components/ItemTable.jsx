import React from "react";
import ItemCard from "./ItemCard.jsx";

const ItemTable = () => {
  const dummyArr = [0, 1, 2];
  // Need to be able to handle multiple item cards coming from ItemCard component
  return (
    <div>
      <ol>
        {dummyArr.map((cardDetail, idx) => {
          return (
            <li key={idx}>
              <ItemCard />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ItemTable;
