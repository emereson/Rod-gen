const Event = require('./event.model');
const Inscription = require('./inscription.model');

const initModel = () => {
  Event.hasMany(Inscription, { foreignKey: 'eventId' });
  Inscription.belongsTo(Event, { foreignKey: 'eventId' });
};

module.exports = initModel;
