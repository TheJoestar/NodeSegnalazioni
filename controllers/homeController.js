const segnalazioneModel = require("../models/segnalazioneModel");
const { SegnalazioneModel } = require("../models/SegnModel");
//Controllers che riceve le get e le post di /home

exports.getHomeController = (req, res, next) => {

  res.render('home.ejs');
};

exports.postHomeController = (req, res, next) => {

  // |-Guide to use Multer.js-------------------------------------------------------------|
  // |  req.file is the name of your file in the form above, here 'uploaded_file'         |
  // |  req.body will hold the text fields, if there were any                             |
  // |------------------------------------------------------------------------------------|

    console.log("Ricevuta richiesta POST");
    //TODO usare il model
    //Dichiariamo un oggetto segnlazioneModel
    //let mySgn = new SegnalazioneModel(req.body.nome,req.body.descrizione,req.body.indirizzo,req.body.img);
    const mySgn = new SegnalazioneModel();
    mySgn.nome=req.body.nome;
    mySgn.descrizione =req.body.descrizione;
    mySgn.indirizzo = req.body.indirizzo;
    mySgn.setImg(req.file.filename,req.file.path,req.file.mimetype);
    segnalazioneModel.addSegnalazioni(mySgn);
    console.log(mySgn.nome,mySgn.descrizione,mySgn.indirizzo,mySgn.img);
    res.render('home.ejs');
  };