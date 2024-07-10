const express = require('express');
const app = express();

// Middleware function to log request details
function logRequests(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logRequests);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
