import React, { useContext, useState } from "react";
import MenuGenerator from "../apis/MenuGenerator";
import { MenuContext } from "../context/MenuContext.js";
import "../styles/addpage.css";

const AddItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("category");
  const [size, setSize] = useState("size");
  const [price, setPrice] = useState("");

  const { addMenuItem } = useContext(MenuContext);

  const handleSubmit = async (Event) => {
    Event.preventDefault();
    try {
      const response = await MenuGenerator.post("/", {
        item: name,
        price,
        category,
        size,
      });

      addMenuItem(response.data.menu_item);
    } catch (err) {
      console.log("ERR, AddItem.jsx: ", err);
    }

    setName("");
    setPrice("");
    setCategory("category");
    setSize("size");
  };

  const handleNameInput = (Event) => {
    setName(Event.currentTarget.value);
  };

  const handleCategoryInput = (Event) => {
    setCategory(Event.currentTarget.value);
  };

  const handleSizeInput = (Event) => {
    setSize(Event.currentTarget.value);
  };

  const handlePriceInput = (Event) => {
    setPrice(Event.currentTarget.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-inputs">
        <input
          type="text"
          placeholder="NAME"
          value={name}
          onInput={handleNameInput}
          required
          className="name input-add"
        />

        <select
          value={category}
          onInput={handleCategoryInput}
          required
          className="category input-add"
        >
          <option disabled value="category">
            CATEGORY
          </option>
          <option value="meat">Meat</option>
          <option value="seafood">Seafood</option>
          <option value="drinks">Drinks</option>
          <option value="dessert">Dessert</option>
          <option value="appetizers">Appetizers</option>
          <option value="breakfast">Breakfast</option>
        </select>

        <select
          value={size}
          onInput={handleSizeInput}
          required
          className="size input-add"
        >
          <option disabled value="size">
            SIZE
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="Not Applicable">Not Applicable</option>
        </select>

        <input
          type="number"
          placeholder="PRICE"
          min="1"
          step="0.01"
          value={price}
          onInput={handlePriceInput}
          required
          className="price input-add"
        />

        <button type="submit" className="submission input-add">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddItem;
