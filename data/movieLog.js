const { MovieLog } = require('../models');
const { generateSearchQuery, generateGetSingleQuery } = require('./utils');

const createMovieLog = async (data) => {
  try {
    const movieLog = new MovieLog(data);
    return await movieLog.save();
  } catch (error) {
    throw error;
  }
};

const getMovieLogs = async (cond) => {
  try {
    return await generateSearchQuery(MovieLog, cond);
  } catch (error) {
    throw error;
  }
};

/**
 * Finds a single MovieLog
 * @param {String|Object} cond MovieLog id or query
 * @param {Object} options
 */
const getMovieLog = async (cond, options) => {
  try {
    return await generateGetSingleQuery(MovieLog, cond, options);
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a single MovieLog
 * @param {String|Object} cond MovieLog id or query
 */
const updateMovieLog = async (cond, data) => {
  try {
    const update = Object.assign({}, data, { updatedAt: new Date() });
    switch (typeof cond) {
      case 'string':
        return await MovieLog.findByIdAndUpdate(cond, update, { new: true });
      default:
        return await MovieLog.updateMany(cond, update);
    }
  } catch (error) {
    throw error;
  }
};


/**
 * Delete a single MovieLog
 * @param {String|Object} cond MovieLog id or query
 */
const deleteMovieLog = async (cond) => {
  try {
    return await MovieLog.findByIdAndDelete(cond);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMovieLog,
  getMovieLogs,
  createMovieLog,
  updateMovieLog,
  deleteMovieLog
};