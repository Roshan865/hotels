const express = require('express');
const app = express();
const db = require('./db'); // Make sure db is properly connected.
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.json());

// Models
const Person = require('./person'); // Ensure the file path is correct.
const MenuItem = require('./MenuItem'); // Ensure the file path is correct.

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to my hotel... how can I help you? Here is a list of menu items.');
});

// Person routes (assuming this file exists and is properly defined)
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes); // Routes for handling 'person' related requests

// Menu routes (assuming this file exists and is properly defined)
const MenuItemRoutes = require('./routes/MenuRoutes');
app.use('/MenuItem', personRoutes); // Routes for handling 'Menu' related requests

// Start the server
app.listen(3000, () => {
  console.log('Server is listening at http://localhost:3000');
});
