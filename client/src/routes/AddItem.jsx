import React from "react";
import Footer from "../components/Footer.jsx";
const AddItem = () => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="NAME"
          // value={props.item}
          // onInput={props.handleItemInput}
        />
        <p>
          <select defaultValue="category">
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
          <select defaultValue="size">
            <option disabled value="size">
              SIZE
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="Not Applicable">Not Applicable</option>
          </select>
        </p>
        <input type="number" placeholder="PRICE" min="1" step="any" />
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
      <br />
      <Footer />
    </>
  );
};

export default AddItem;
