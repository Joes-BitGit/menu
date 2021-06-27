import React from "react";
import "../styles/searchbar.css";

const SearchBar = (props) => {
  return (
    <div className="search-container">
      {/* SEARCH BAR */}
      <form className="search-bar">
        <input
          type="text"
          placeholder="ITEM SEARCH"
          className="input search"
          value={props.item}
          onInput={props.handleItemInput}
        />

        {/* <select defaultValue="category" className="select search">
          <option disabled value="category">
            CATEGORY
          </option>
          <option value="meat">Meat</option>
          <option value="marisco">Marisco</option>
          <option value="drinks">Drinks</option>
          <option value="dessert">Dessert</option>
          <option value="appetizers">Appetizers</option>
          <option value="breakfast">Breakfast</option>
        </select> */}
      </form>
    </div>
  );
};

export default SearchBar;
