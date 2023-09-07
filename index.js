const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

// Define a route to handle requests and send the HTML response
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

