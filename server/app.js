const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Routes Imports
const defaultRoutes = require('./routes/routes');
const userRoutes = require('./routes/user-routes');

// Other imports
const HttpError = require('./models/http-error');

// Default app.js
const app = express();
dotenv.config();
app.use(cors());

// Middleware configuration
app.use('/api', defaultRoutes);
app.use('/api/user', userRoutes);

// Kind of error handling middleware, but executes on every request
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);

  // Throw can be used only in sync functions and there is no need to use return keyword
  throw error;
});

// Middleware for Error Handling, invokes when any of the above middleware's has error
app.use((error, req, res, next) => {
  // To send only one header
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || 'An error occurred' });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`The Server is listening on ${PORT}`));
