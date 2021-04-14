import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("Size");
  const [menu, setMenu] = useState([]);

  const handleSubmit = (Event) => {
    setMenu([...menu, { name, price, category, size }]);
    console.log(menu);
    Event.preventDefault();
  };

  const handleNameInput = (Event) => {
    setName(Event.currentTarget.value);
  };

  const handlePriceInput = (Event) => {
    setPrice(Event.currentTarget.value);
  };

  const handleCategoryInput = (Event) => {
    setCategory(Event.currentTarget.value);
  };

  const handleSizeInput = (Event) => {
    setSize(Event.currentTarget.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onInput={handleNameInput}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onInput={handlePriceInput}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={category}
            onInput={handleCategoryInput}
          />
        </label>
        <br />
        <label>
          Sizes:
          <select value={size} onInput={handleSizeInput}>
            <option disabled value="size">
              Sizes
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="null">N/A</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(menu)}
    </div>
  );
}

export default App;
