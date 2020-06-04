const MovieLog = require('../data/movieLog');

module.exports = {
  getMovieLog,
  getMovieLogs,
  createMovieLog,
  updateMovieLog,
  deleteMovieLog
};

/**
 * @api {get} /movieLogs/:id Get MovieLog by id
 * @apiName GetMovieLog
 * @apiGroup MovieLog
 *
 * @apiUse Authentication
 * @apiParam {String} id id of movieLog to retrieve
 * @apiUse PopulateQueryParam
 * @apiUse ModelMovieLog
 */
async function getMovieLog(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const movieLogs = await MovieLog.getMovieLog(req.params.id);
      return res.json(movieLogs);
    }

    if (req.user.role == 'user' && req.user._id == req.params.user) {
      const movieLogs = await MovieLog.getMovieLog({ ...req.query, user: req.user._id });
      return res.json(movieLogs);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch MovieLog' });
  }
}

/**
 * @api {get} /movieLogs Get all MovieLogs
 * @apiName GetMovieLogs
 * @apiGroup MovieLog
 *
 * @apiUse Authentication
 * @apiUse ListQueryParams
 * @apiUse ModelQueryMovieLog
 * @apiUse OtherModelParams
 * @apiUse ModelMovieLogs
 */
async function getMovieLogs(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const movieLogs = await MovieLog.getMovieLogs(req.query);
      console.log(movieLogs);
      return res.json(movieLogs);
    }

    if (req.user.role == 'user' && req.user._id == req.query.user) {
      const movieLogs = await MovieLog.getMovieLogs({ ...req.query, user: req.user._id });
      return res.json(movieLogs);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch MovieLogs' });
  }
}

/**
 * @api {post} /movieLogs Create new MovieLog
 * @apiName CreateMovieLog
 * @apiGroup MovieLog
 *
 * @apiUse Authentication
 * @apiUse ModelCreateMovieLog
 * @apiUse ModelMovieLog
 */
async function createMovieLog(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const movieLog = await MovieLog.createMovieLog(req.body);
      return res.json(movieLog);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const movieLog = await MovieLog.createMovieLog(req.body);
      return res.json(movieLog);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to create MovieLog' });
  }
}

/**
 * @api {put} /movieLogs/:id Update MovieLog by id
 * @apiName UpdateMovieLog
 * @apiGroup MovieLog
 *
 * @apiUse Authentication
 * @apiParam {String} id id of MovieLog to update
 * @apiUse ModelUpdateMovieLog
 * @apiUse ModelMovieLog
 */
async function updateMovieLog(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const movieLog = await MovieLog.updateMovieLog({_id: req.params.id}, req.body);
      return res.json(movieLog);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const movieLog = await MovieLog.updateMovieLog({_id: req.params.id}, req.body);
      return res.json(movieLog);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to update MovieLog' });
  }
}

/**
 * @api {delete} /movieLogs/:id Delete MovieLog by id
 * @apiName DeleteMovieLog
 * @apiGroup MovieLog
 *
 * @apiUse Authentication
 * @apiParam {String} id id of MovieLog to delete
 * @apiUse PopulateQueryParam
 * @apiUse ModelMovieLog
 */
async function deleteMovieLog(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const movieLog = await MovieLog.deleteMovieLog({_id: req.params.id}, req.body);
      return res.json(movieLog);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const movieLog = await MovieLog.deleteMovieLog({_id: req.params.id}, req.body);
      return res.json(movieLog);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch MovieLog' });
  }
}