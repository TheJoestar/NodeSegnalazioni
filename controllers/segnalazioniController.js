const segnalazioneModel = require("../models/segnalazioneModel");
const { SegnalazioneModel } = require("../models/SegnModel");

exports.getSegnalazioniController = (req, res, next) => {
  const listaSegnalazioni = segnalazioneModel.getSegnalazioni();

  res.render('segnalazioni.ejs', {listaSegnalazioni, numSegnalazioni: listaSegnalazioni.length});
};