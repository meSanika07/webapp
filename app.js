const express = require('express');      // Import Express
const app = express();                   // Create an Express application
const port = 3000;                       // Define the port number

app.get('/', (req, res) => {             // Define a route for the root path
  res.send('Hello, World!');             // Send a simple response
});

app.listen(port, () => {                 // Start the server
  console.log(`App is running on http://localhost:${port}`);
});
