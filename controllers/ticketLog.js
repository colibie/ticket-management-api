const TicketLog = require('../data/ticketLog');

module.exports = {
  getTicketLog,
  getTicketLogs,
  createTicketLog,
  updateTicketLog,
  deleteTicketLog
};

/**
 * @api {get} /ticketLogs/:id Get TicketLog by id
 * @apiName GetTicketLog
 * @apiGroup TicketLog
 *
 * @apiUse Authentication
 * @apiParam {String} id id of TicketLog to retrieve
 * @apiUse PopulateQueryParam
 * @apiUse ModelTicketLog
 */
async function getTicketLog(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const ticketLogs = await TicketLog.getTicketLog(req.params.id);
      return res.json(ticketLogs);
    }

    if (req.user.role == 'user' && req.user._id == req.params.user) {
      const ticketLogs = await TicketLog.getTicketLog({ ...req.query, user: req.user._id });
      return res.json(ticketLogs);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch TicketLog' });
  }
}

/**
 * @api {get} /ticketLogs Get all TicketLogs
 * @apiName GetTicketLogs
 * @apiGroup TicketLog
 *
 * @apiUse Authentication
 * @apiUse ListQueryParams
 * @apiUse ModelQueryTicketLog
 * @apiUse OtherModelParams
 * @apiUse ModelTicketLogs
 */
async function getTicketLogs(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const ticketLogs = await TicketLog.getTicketLogs(req.query);
      return res.json(ticketLogs);
    }

    if (req.user.role == 'user' && req.user._id == req.query.user) {
      const ticketLogs = await TicketLog.getTicketLogs({ ...req.query, user: req.user._id });
      return res.json(ticketLogs);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch TicketLogs' });
  }
}

/**
 * @api {post} /ticketLogs Create new TicketLog
 * @apiName CreateTicketLog
 * @apiGroup TicketLog
 *
 * @apiUse Authentication
 * @apiUse ModelCreateTicketLog
 * @apiUse ModelTicketLog
 */
async function createTicketLog(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const ticketLog = await TicketLog.createTicketLog(req.body);
      return res.json(ticketLog);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const ticketLog = await TicketLog.createTicketLog(req.body);
      return res.json(ticketLog);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to create TicketLog' });
  }
}

/**
 * @api {put} /ticketLogs/:id Update TicketLog by id
 * @apiName UpdateTicketLog
 * @apiGroup TicketLog
 *
 * @apiUse Authentication
 * @apiParam {String} id id of TicketLog to update
 * @apiUse ModelUpdateTicketLog
 * @apiUse ModelTicketLog
 */
async function updateTicketLog(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const ticketLog = await TicketLog.updateTicketLog({_id: req.params.id}, req.body);
      return res.json(ticketLog);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const ticketLog = await TicketLog.updateTicketLog({_id: req.params.id}, req.body);
      return res.json(ticketLog);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to update TicketLog' });
  }
}

/**
 * @api {delete} /ticketLogs/:id Delete TicketLog by id
 * @apiName DeleteTicketLog
 * @apiGroup TicketLog
 *
 * @apiUse Authentication
 * @apiParam {String} id id of TicketLog to delete
 * @apiUse PopulateQueryParam
 * @apiUse ModelTicketLog
 */
async function deleteTicketLog(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const ticketLog = await TicketLog.deleteTicketLog({_id: req.params.id}, req.body);
      return res.json(ticketLog);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const ticketLog = await TicketLog.deleteTicketLog({_id: req.params.id}, req.body);
      return res.json(ticketLog);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch TicketLog' });
  }
}