
exports.getHomeController = (req, res, next) => {

  res.render('home.ejs');
};


exports.postHomeController = (req, res, next) => {
    console.log("Ricevuta richiesta POST")
    //const segnalazione = new Object();
    //segnalazione.constructor(req.body);
    //console.log(segnalazione);
    console.log(req.body);
    
  };