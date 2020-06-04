var express = require('express');
var router = express.Router();
const movieLogController = require('../controllers/movieLog');

/* GET movieLog listing. */
router.get('/', movieLogController.getMovieLogs);

/* Create event */
router.post('/', movieLogController.createMovieLog);

/* GET movieLog by id. */
router.get('/:id', movieLogController.getMovieLog);

/* UPDATE movieLog listing. */
router.put('/update/:id', movieLogController.updateMovieLog);

/* DELETE MovieLog listing. */
router.delete('/delete/:id', movieLogController.deleteMovieLog);

module.exports = router;
