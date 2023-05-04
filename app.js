const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const eventRoute = require('./routes/event.routes');
const inscriptionRoute = require('./routes/inscription.routes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/event', eventRoute);
app.use('/api/v1/inscription', inscriptionRoute);

module.exports = app;
