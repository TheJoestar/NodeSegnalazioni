var express = require('express');
const { sendfile } = require('express/lib/response');
const multer  = require('multer');
const upload = multer({ dest: './public/data/uploads/' });
const { getHomeController } = require('../controllers/homeController');
const { postHomeController } = require('../controllers/homeController');
const { getSegnalazioni, getSegnalazioniController, } = require('../controllers/segnalazioniController');
var router = express.Router();

//Port to listen on
//const PORT = 3000;
//let app = express();

/* GET home page. */
router.get('/home', getHomeController);

//!!  upload.single('<nomeFile>') deve avere lo stesso nome dell'elemento input="file" nel html
/*POST HOME page */
router.post('/home', upload.single('img'), postHomeController);

/* GET segnalation page. */
router.get('/segnalazioni', getSegnalazioniController);

router.get('/public/data/uploads/:id', function(req, res, next){
  let path = "./public/data/uploads/"+req.params.id;
  res.sendfile(path);
});

//d'ora in poi le get e le post così: "localhost:3000/*" non verrano considerate
//NB: * significa tutte le parole possibili
// router.use(function(req, res, next){
//   res.setHeader('Content-Type', 'text/plain');
//   res.status(404).send('La pagina non esiste amico!');
// });

/*app.listen(PORT, err => {
  if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
  console.log(`Server is Listening on: http://localhost:${PORT}/`);
});
*/
module.exports = router;
