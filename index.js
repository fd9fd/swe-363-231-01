const express = require('express');
const router = express.Router();

// Middleware to process the form submission
const processFormMiddleware = (req, res, next) => {
  // Process the form data (for now, just log it)
  console.log('Form data:', req.body);
  next(); // Move to the next middleware or route handler
};

// Routes
router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

router.get('/about', (req, res) => {
  res.send('About us page');
});

router.post('/contact', processFormMiddleware, (req, res) => {
  res.send('Form submission processed successfully!');
});

module.exports = router;
