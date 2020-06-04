const { Customer } = require('../models');
const { generateSearchQuery, generateGetSingleQuery } = require('./utils');

const createCustomer = async (data) => {
  try {
    const customer = new Customer(data);
    return await customer.save();
  } catch (error) {
    throw error;
  }
};

const getCustomers = async (cond) => {
  try {
    return await generateSearchQuery(Customer, cond);
  } catch (error) {
    throw error;
  }
};

/**
 * Finds a single Customer
 * @param {String|Object} cond Customer id or query
 * @param {Object} options
 */
const getCustomer = async (cond, options) => {
  try {
    return await generateGetSingleQuery(Customer, cond, options);
  } catch (error) {
    throw error;
  }
};

const getCustomerByEmail = async (email) => {
  try {
    return await Customer.findOne({ email: new RegExp(`^${email}$`, 'i') });
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a single Customer
 * @param {String|Object} cond Customer id or query
 */
const updateCustomer = async (cond, data) => {
  try {
    const update = Object.assign({}, data, { updatedAt: new Date() });
    switch (typeof cond) {
      case 'string':
        return await Customer.findByIdAndUpdate(cond, update, { new: true });
      default:
        return await Customer.updateMany(cond, update);
    }
  } catch (error) {
    throw error;
  }
};


/**
 * Delete a single Customer
 * @param {String|Object} cond Customer id or query
 */
const deleteCustomer = async (cond) => {
  try {
    return await Customer.findByIdAndDelete(cond);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCustomer,
  getCustomers,
  getCustomerByEmail,
  createCustomer,
  updateCustomer,
  deleteCustomer
};