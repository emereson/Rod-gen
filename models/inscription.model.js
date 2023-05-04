const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Inscription = db.define('inscription', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  eventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nameOne1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RutPlayer1: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  email1: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  mobileNumber1: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  birthdate1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poloSize1: {
    type: DataTypes.ENUM('s', 'm ', 'l', 'xl', 'xxl'),
    allowNull: false,
    defaultValue: 'l',
  },
  category1: {
    type: DataTypes.ENUM(
      'damas A',
      'damas B',
      'damas C',
      'damas D',
      '1ra Masculina',
      '2da Masculina',
      '3ra Masculina',
      '4ta Masculina',
      '5ta Masculina',
      '6ta Masculina',
      'mixto'
    ),
    allowNull: false,
  },
  clubPlay1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  positionPlay1: {
    type: DataTypes.ENUM('Derecho', 'Rever', 'Ambos'),
    allowNull: false,
    defaultValue: 'Ambos',
  },
  medicalProblem1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nameOne2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RutPlayer2: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  email2: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  mobileNumber2: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  birthdate2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poloSize2: {
    type: DataTypes.ENUM('s', 'm ', 'l', 'xl', 'xxl'),
    allowNull: false,
    defaultValue: 'l',
  },
  category2: {
    type: DataTypes.ENUM(
      'damas A',
      'damas B',
      'damas C',
      'damas D',
      '1ra Masculina',
      '2da Masculina',
      '3ra Masculina',
      '4ta Masculina',
      '5ta Masculina',
      '6ta Masculina',
      'mixto'
    ),
    allowNull: false,
  },
  clubPlay2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  positionPlay2: {
    type: DataTypes.ENUM('Derecho', 'Rever', 'Ambos'),
    allowNull: false,
    defaultValue: 'Ambos',
  },
  medicalProblem2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Inscription;
