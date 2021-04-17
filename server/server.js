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

// create a menu item
app.post("/api/v1/menu", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO menu(item, price, category, size) VALUES ($1,$2,$3,$4) returning *;",
      [req.body.item, req.body.price, req.body.category, req.body.size]
    );
    res.status(201).json({
      status: "success",
      menu_item: results.rows[0],
    });
  } catch (err) {
    console.log("ERR, create entry backend: ", err);
    res.status(400);
  }
});
// update a menu item

// delete a menu item

// Prod ready
const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
