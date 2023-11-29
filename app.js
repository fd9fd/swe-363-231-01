const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');

//starting with '/'
app.use('/', routes);

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
