const { SegnalazioneModel } = require("../models/SegnModel");

//vettore di segnalazioni di tipo SegnalazioneModel
const listaSegnalazioni = [];
  
  exports.addSegnalazioni = (segnalazione) => {
    listaSegnalazioni.push(segnalazione);
  }

  exports.getSegnalazioni = () => {
    return listaSegnalazioni;
  };