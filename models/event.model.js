const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Event = db.define('event', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  typeEvent: {
    type: DataTypes.ENUM('Liga', 'Torneo', 'Americano'),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rules: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverImg: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      'https://www.researchgate.net/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png',
  },
  startDateEvent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endDateEvent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDateInscription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endDateInscription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('active', 'disabled'),
    allowNull: false,
    defaultValue: 'active',
  },
});

module.exports = Event;
