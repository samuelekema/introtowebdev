const express = require('express');
const { body, validationResult } = require('express-validator');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const validateContactForm = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('message').notEmpty().withMessage('Message is required')
];

app.post('/contact', validateContactForm, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Handle the form submission logic here (e.g., sending an email)
  const { name, email, message } = req.body;
  // For demonstration, you can redirect to a thank you page
  res.redirect('/success.html');
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
