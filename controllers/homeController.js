const segnalazioneModel = require("../models/segnalazioneModel");
const { SegnalazioneModel } = require("../models/SegnModel");
//Controllers che riceve le get e le post di /home

//
exports.getHomeController = (req, res, next) => {

  res.render('home.ejs');
};


exports.postHomeController = (req, res, next) => {
    console.log("Ricevuta richiesta POST")
    //const segnalazione = new Object();
    //segnalazione.constructor(req.body);
    //console.log(segnalazione);
    //TODO usare il model
    //Dichiariamo un oggetto segnlazioneModel
    let mySgn = new SegnalazioneModel(req.body.nome,req.body.descrizione,req.body.indirizzo,req.body.img);
    segnalazioneModel.addSegnalazioni(mySgn);
    console.log(req.body);
    console.log(segnalazioneModel.getSegnalazioni);
    
  };