const Event = require('./event.model');
const GalleryImg = require('./galleryImg.model');
const Inscription = require('./inscription.model');

const initModel = () => {
  Event.hasMany(Inscription);
  Inscription.belongsTo(Event);

  Event.hasMany(GalleryImg);
  GalleryImg.belongsTo(Event);
};

module.exports = initModel;
