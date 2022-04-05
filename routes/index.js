var express = require('express');
const { getHomeController } = require('../controllers/homeController');
const { postHomeController } = require('../controllers/homeController');
const { getSegnalazioni, getSegnalazioniController, } = require('../controllers/segnalazioniController');
var router = express.Router();

//Port to listen on
//const PORT = 3000;
//let app = express();

/* GET home page. */
router.get('/home', getHomeController);

/*POST HOME page */
router.post('/home', postHomeController);

/* GET segnalation page. */
router.get('/segnalazioni', getSegnalazioniController);


router.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('La pagina non esiste amico!');
});


/*app.listen(PORT, err => {
  if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
  console.log(`Server is Listening on: http://localhost:${PORT}/`);
});
*/
module.exports = router;
