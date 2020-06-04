const { Movie } = require('../models');
const { generateSearchQuery, generateGetSingleQuery } = require('./utils');

const createMovie = async (data) => {
  try {
    const movie = new Movie(data);
    return await movie.save();
  } catch (error) {
    throw error;
  }
};

const getMovies = async (cond) => {
  try {
    return await generateSearchQuery(Movie, cond);
  } catch (error) {
    throw error;
  }
};

/**
 * Finds a single Movie
 * @param {String|Object} cond Movie id or query
 * @param {Object} options
 */
const getMovie = async (cond, options) => {
  try {
    return await generateGetSingleQuery(Movie, cond, options);
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a single Movie
 * @param {String|Object} cond Movie id or query
 */
const updateMovie = async (cond, data) => {
  try {
    const update = Object.assign({}, data, { updatedAt: new Date() });
    switch (typeof cond) {
      case 'string':
        return await Movie.findByIdAndUpdate(cond, update, { new: true });
      default:
        return await Movie.updateMany(cond, update);
    }
  } catch (error) {
    throw error;
  }
};


/**
 * Delete a single Movie
 * @param {String|Object} cond Movie id or query
 */
const deleteMovie = async (cond) => {
  try {
    return await Movie.findByIdAndDelete(cond);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie
};