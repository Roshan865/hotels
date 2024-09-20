const express = require("express");
const router = express.Router();
const MenuItem = require("./../MenuItem");
const { route } = require("./MenuRoutes");

// POST route to add a MenuItem
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the menu item data
    const newMenuItem = new MenuItem(data); // Create a new menu item document using the mongoose model

    const response = await newMenuItem.save(); // Save the new menu item to the database
    console.log("Menu item saved");
    res.status(201).json(response); // 201 is the correct status code for created resources
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET method to fetch all MenuItems
router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find(); // Fetch all menu items from the database
    console.log("Menu items fetched");
    res.status(200).json(menuItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
