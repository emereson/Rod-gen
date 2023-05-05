const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');

const eventRoute = require('./routes/event.routes');
const inscriptionRoute = require('./routes/inscription.routes');
const sponsorRoute = require('./routes/sponsor.routes');
const galleryImgRoute = require('./routes/galleryImg.routes');

const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/error.controller');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp());

app.use('/api/v1/event', eventRoute);
app.use('/api/v1/inscription', inscriptionRoute);
app.use('/api/v1/sponsor', sponsorRoute);
app.use('/api/v1/galleryImg', galleryImgRoute);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this seerver! 💀`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
