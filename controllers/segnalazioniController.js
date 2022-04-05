const segnalazioneModel = require("../models/segnalazioneModel");
const { SegnalazioneModel } = require("../models/SegnModel");

exports.getSegnalazioniController = (req, res, next) => {
  const segnalazioni = segnalazioneModel.getSegnalazioni();

  res.render('segnalazioni.ejs', {segnalazioni, numSegnalazioni: segnalazioni.length});
};