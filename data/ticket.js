const { Ticket } = require('../models');
const { generateSearchQuery, generateGetSingleQuery } = require('./utils');

const createTicket = async (data) => {
  try {
    const ticket = new Ticket(data);
    return await ticket.save();
  } catch (error) {
    throw error;
  }
};

const getTickets = async (cond) => {
  try {
    return await generateSearchQuery(Ticket, cond);
  } catch (error) {
    throw error;
  }
};

/**
 * Finds a single Ticket
 * @param {String|Object} cond Ticket id or query
 * @param {Object} options
 */
const getTicket = async (cond, options) => {
  try {
    return await generateGetSingleQuery(Ticket, cond, options);
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a single Ticket
 * @param {String|Object} cond Ticket id or query
 */
const updateTicket = async (cond, data) => {
  try {
    const update = Object.assign({}, data, { updatedAt: new Date() });
    switch (typeof cond) {
      case 'string':
        return await Ticket.findByIdAndUpdate(cond, update, { new: true });
      default:
        return await Ticket.updateMany(cond, update);
    }
  } catch (error) {
    throw error;
  }
};


/**
 * Delete a single Ticket
 * @param {String|Object} cond Ticket id or query
 */
const deleteTicket = async (cond) => {
  try {
    return await Ticket.findByIdAndDelete(cond);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTicket,
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket
};