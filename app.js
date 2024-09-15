const express = require('express');
const app = express();

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});