// entry point into backend
// responsibility: creating and init express app, starting and listening to given port
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

// express middleware that attaches to the request body
app.use(cors());

// Need this to create data in json format middleware
app.use(express.json());

const db = require("./db/db.js");

// ROUTES //
// get all menu items
app.get("/api/v1/menu", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM menu;");

    res.status(200).json({
      status: "SUCCESS",
      count: results.rowCount,
      menu_item: results.rows,
    });
  } catch (err) {
    console.log("ERR, get all entries backend: ", err);
    res.status(500);
  }
});
// get a menu item
app.get("/api/v1/menu/:item_id", async (req, res) => {
  try {
    // CAN I SEARCH USING A TEXT OF NAME?
    const results = await db.query("SELECT * FROM menu WHERE item_id=$1;", [
      req.params.item_id,
    ]);
    res.status(200).json({
      status: "SUCCESS",
      count: results.rowCount,
      menu_item: results.rows,
    });
  } catch (err) {
    console.log("ERR, get an item backend: ", err);
    res.status(500);
  }
});
// create a menu item
app.post("/api/v1/menu", async (req, res) => {
  // THIS CAN ALSO BE DONE ON THE CLIENT SIDE
  // allows the query to accept 3 req and fills in the size
  if (req.body.size === undefined) {
    req.body.size = "Not Applicable";
  }
  try {
    const results = await db.query(
      "INSERT INTO menu(item, price, category, size) VALUES ($1,$2,$3, $4) RETURNING *;",
      [req.body.item, req.body.price, req.body.category, req.body.size]
    );
    res.status(201).json({
      status: "success",
      menu_item: results.rows[0],
    });
  } catch (err) {
    console.log("ERR, create item backend: ", err);
    res.status(500);
  }
});
// update a menu item
app.put("/api/v1/menu/:item_id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE menu SET item=$1, price=$2, category=$3, size=$4 WHERE item_id=$5 RETURNING *;",
      [
        req.body.item,
        req.body.price,
        req.body.category,
        req.body.size,
        req.params.item_id,
      ]
    );
    res.status(200).json({
      status: "SUCCESS",
      count: results.rowCount,
      menu_item: results.rows,
    });
  } catch (err) {
    console.log("ERR, update item backend: ", err);
    res.status(500);
  }
});
// delete a menu item
app.delete("/api/v1/menu/:item_id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM menu WHERE item_id=$1;", [
      req.params.item_id,
    ]);
    res.status(202).json({
      status: "success",
    });
  } catch (err) {
    console.log("ERR, delete item backend: ", err);
    res.status(500);
  }
});
// Prod ready
const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
