const { FakeSegnalazioni } = require("../fakeDB/FakeSegnalazioni");
const { SegnalazioneModel } = require("../models/SegnModel");

//vettore di segnalazioni di tipo SegnalazioneModel
  const listSegnalazione = new FakeSegnalazioni();
  
  exports.addSegnalazioni = (segnalazione) => {
    listSegnalazione.addSegnalazione(segnalazione);
  }

  exports.getSegnalazioni = () => {
    return listSegnalazione.getAllSegnalazioni();
  };