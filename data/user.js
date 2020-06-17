const { User } = require('../models');
const { generateSearchQuery, generateGetSingleQuery } = require('./utils');
const bcrypt = require('bcrypt-nodejs');

const createUser = async (email, password, others) => {
  try {
    const existingEmail = await User.findOne({ email: new RegExp(email, 'i') });
console.log(existingEmail)
    if (existingEmail) {
      throw new Error('email already exists');
    }
    let user = new User({
      ...others, email, password: bcrypt.hashSync(password),
    });

    return await user.save();
  } catch (error) {
    throw error;
  }
};

const getUsers = async (cond) => {
  try {
    return await generateSearchQuery(User, cond);
  } catch (error) {
    throw error;
  }
};

/**
 * Finds a single User
 * @param {String|Object} cond User id or query
 * @param {Object} options
 */
const getUser = async (cond, options) => {
  try {
    return await generateGetSingleQuery(User, cond, options);
  } catch (error) {
    throw error;
  }
};

const authenticate = async (email, password) => {
  try {
    const user = await User.findOne({ email: new RegExp(email, 'i') });
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    throw new Error('email or password incorrect');
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a single User
 * @param {String|Object} cond User id or query
 */
const updateUser = async (cond, data) => {
  try {
    const update = Object.assign({}, data, { updatedAt: new Date() });
    switch (typeof cond) {
      case 'string':
        return await User.findByIdAndUpdate(cond, update, { new: true });
      default:
        return await User.updateMany(cond, update);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUser,
  getUsers,
  authenticate,
  createUser,
  updateUser,
};
