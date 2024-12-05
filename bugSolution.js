const express = require('express');
const app = express();
app.get('/', (req, res) => {
  const timeoutId = setTimeout(() => {
    res.status(504).send('Request timed out');
  }, 5000); // Set a 5-second timeout
  setTimeout(() => {
    clearTimeout(timeoutId); // Clear the timeout if the request completes within the time limit
    res.send('Hello World!');
  }, 6000); //Simulate a 6-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});