const { TicketLog } = require('../models');
const { generateSearchQuery, generateGetSingleQuery } = require('./utils');

const createTicketLog = async (data) => {
  try {
    const ticketLog = new TicketLog(data);
    return await ticketLog.save();
  } catch (error) {
    throw error;
  }
};

const getTicketLogs = async (cond) => {
  try {
    return await generateSearchQuery(TicketLog, cond);
  } catch (error) {
    throw error;
  }
};

/**
 * Finds a single TicketLog
 * @param {String|Object} cond TicketLog id or query
 * @param {Object} options
 */
const getTicketLog = async (cond, options) => {
  try {
    return await generateGetSingleQuery(TicketLog, cond, options);
  } catch (error) {
    throw error;
  }
};

/**
 * Updates a single TicketLog
 * @param {String|Object} cond TicketLog id or query
 */
const updateTicketLog = async (cond, data) => {
  try {
    const update = Object.assign({}, data, { updatedAt: new Date() });
    switch (typeof cond) {
      case 'string':
        return await TicketLog.findByIdAndUpdate(cond, update, { new: true });
      default:
        return await TicketLog.updateMany(cond, update);
    }
  } catch (error) {
    throw error;
  }
};


/**
 * Delete a single TicketLog
 * @param {String|Object} cond TicketLog id or query
 */
const deleteTicketLog = async (cond) => {
  try {
    return await TicketLog.findByIdAndDelete(cond);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTicketLog,
  getTicketLogs,
  createTicketLog,
  updateTicketLog,
  deleteTicketLog
};