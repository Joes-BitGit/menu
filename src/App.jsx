function App() {
  return (
    <div className="App">
      <form>
        <label htmlFor="">
          Name:
          <input type="text" name="name" />
        </label>
        <label htmlFor="">
          Price:
          <input type="number" name="price" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
