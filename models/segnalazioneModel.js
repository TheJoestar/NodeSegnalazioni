const { SegnalazioneModel } = require("../models/SegnModel");

    //{ name: "Giovanni", indirizzo: "Via Alberto 5", data: 8 },
    //{ name: "Carlo", indirizzo: "Via Saffi 3", data: 20 }

//vettore di segnalazioni di tipo SegnalazioneModel
const listaSegnalazioni = [
    new SegnalazioneModel("Giovanni","Descrizione","Via Alberto 5","img.png"),
    new SegnalazioneModel("Carlo","DescrizioneCarlo","Via Saffi 3","img2.png")
  ];
  
  exports.addSegnalazioni = (segnalazione) => {
    listaSegnalazioni.push(segnalazione);
  }

  exports.getSegnalazioni = () => {
    return listaSegnalazioni;
  };