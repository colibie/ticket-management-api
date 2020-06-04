const Movie = require('../data/movie');

module.exports = {
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie
};

/**
 * @api {get} /movies/:id Get Movie by id
 * @apiName GetMovie
 * @apiGroup Movie
 *
 * @apiUse Authentication
 * @apiParam {String} id id of movie to retrieve
 * @apiUse PopulateQueryParam
 * @apiUse ModelMovie
 */
async function getMovie(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const movies = await Movie.getMovie(req.params.id);
      return res.json(movies);
    }

    if (req.user.role == 'user' && req.user._id == req.params.user) {
      const movies = await Movie.getMovie({ ...req.query, user: req.user._id });
      return res.json(movies);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Movie' });
  }
}

/**
 * @api {get} /movies Get all Movies
 * @apiName GetMovies
 * @apiGroup Movie
 *
 * @apiUse Authentication
 * @apiUse ListQueryParams
 * @apiUse ModelQueryMovie
 * @apiUse OtherModelParams
 * @apiUse ModelMovies
 */
async function getMovies(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const movies = await Movie.getMovies(req.query);
      return res.json(movies);
    }

    if (req.user.role == 'user' && req.user._id == req.query.user) {
      const movies = await Movie.getMovies({ ...req.query, user: req.user._id });
      return res.json(movies);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Movies' });
  }
}

/**
 * @api {post} /movies Create new Movie
 * @apiName CreateMovie
 * @apiGroup Movie
 *
 * @apiUse Authentication
 * @apiUse ModelCreateMovie
 * @apiUse ModelMovie
 */
async function createMovie(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const movie = await Movie.createMovie(req.body);
      return res.json(movie);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const movie = await Movie.createMovie(req.body);
      return res.json(movie);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to create Movie' });
  }
}

/**
 * @api {put} /movies/:id Update Movie by id
 * @apiName UpdateMovie
 * @apiGroup Movie
 *
 * @apiUse Authentication
 * @apiParam {String} id id of Movie to update
 * @apiUse ModelUpdateMovie
 * @apiUse ModelMovie
 */
async function updateMovie(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const movie = await Movie.updateMovie({_id: req.params.id}, req.body);
      return res.json(movie);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const movie = await Movie.updateMovie({_id: req.params.id}, req.body);
      return res.json(movie);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to update Movie' });
  }
}

/**
 * @api {delete} /movies/:id Delete Movie by id
 * @apiName DeleteMovie
 * @apiGroup Movie
 *
 * @apiUse Authentication
 * @apiParam {String} id id of Movie to delete
 * @apiUse PopulateQueryParam
 * @apiUse ModelMovie
 */
async function deleteMovie(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const movie = await Movie.deleteMovie({_id: req.params.id}, req.body);
      return res.json(movie);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const movie = await Movie.deleteMovie({_id: req.params.id}, req.body);
      return res.json(movie);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Movie' });
  }
}