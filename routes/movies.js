var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movie');

/* GET movie listing. */
router.get('/', movieController.getMovies);

/* Create event */
router.post('/', movieController.createMovie);

/* GET movie by id. */
router.get('/:id', movieController.getMovie);

/* UPDATE movie listing. */
router.put('/update/:id', movieController.updateMovie);

/* DELETE Movie listing. */
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;
