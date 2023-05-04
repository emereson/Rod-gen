const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Liga = db.define('liga', {
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
  galleryImg: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue:
      'https://www.researchgate.net/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png',
  },
  status: {
    type: DataTypes.ENUM('active', 'disabled'),
    allowNull: false,
    defaultValue: 'active',
  },
});

module.exports = Liga;
