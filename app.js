const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const eventRoute = require('./routes/event.routes');
const inscriptionRoute = require('./routes/inscription.routes');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/error.controller');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/event', eventRoute);
app.use('/api/v1/inscription', inscriptionRoute);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this seerver! 💀`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
