const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Handle root URL by serving home.html or the main entry point
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html')); // Change this if you want to use a different HTML file
});

// Start the server
app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});