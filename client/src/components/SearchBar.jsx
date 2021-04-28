import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      {/* SEARCH BAR */}
      <form>
        <input
          type="text"
          placeholder="ITEM"
          value={props.item}
          onInput={props.handleItemInput}
        />
        <p>
          <select name="category">
            <option selected disabled value="category">
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
      </form>
      <button>SHOW ALL</button>
      <p>{props.item}</p>
    </div>
  );
};

export default SearchBar;
