import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MenuContext } from "../context/MenuContext.js";
import MenuGenerator from "../apis/MenuGenerator";

const UpdateItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("category");
  const [size, setSize] = useState("size");
  const [price, setPrice] = useState("");

  // need context in order to update my source of truth
  const { menuItems, setMenuItems } = useContext(MenuContext);
  // console.log("context", menuItems);
  const { id } = useParams();

  useEffect(() => {
    // fetch data from context
    const fetchData = async () => {
      const response = await MenuGenerator.get(`/${id}`);

      setName(response.data.menu_item[0].item);
      setCategory(response.data.menu_item[0].category);
      setSize(response.data.menu_item[0].size);
      // getting rid of the dollar sign
      setPrice(Number(response.data.menu_item[0].price.substring(1)));
    };
    fetchData();
  }, []);

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onInput={(Event) => setName(Event.currentTarget.value)}
            required
          />
        </label>
        <p>
          <select
            value={category}
            onInput={(Event) => setCategory(Event.currentTarget.value)}
            required
          >
            <option disabled value="category">
              CATEGORY
            </option>
            <option value="meat">Meat</option>
            <option value="marisco">Marisco</option>
            <option value="drinks">Drinks</option>
            <option value="dessert">Dessert</option>
            <option value="appetizers">Appetizers</option>
            <option value="breakfast">Breakfast</option>
          </select>
        </p>
        <p>
          <select
            value={size}
            onInput={(Event) => setSize(Event.currentTarget.value)}
            required
          >
            <option disabled value="size">
              SIZE
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="Not Applicable">Not Applicable</option>
          </select>
        </p>
        <input
          type="number"
          placeholder="PRICE"
          min="1"
          step="0.01"
          value={price}
          onInput={(Event) => setPrice(Event.currentTarget.value)}
          required
        />
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </>
  );
};

export default UpdateItem;
