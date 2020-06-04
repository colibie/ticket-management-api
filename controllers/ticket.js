const Ticket = require('../data/ticket');

module.exports = {
  getTicket,
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket
};

/**
 * @api {get} /tickets/:id Get Ticket by id
 * @apiName GetTicket
 * @apiGroup Ticket
 *
 * @apiUse Authentication
 * @apiParam {String} id id of Ticket to retrieve
 * @apiUse PopulateQueryParam
 * @apiUse ModelTicket
 */
async function getTicket(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const tickets = await Ticket.getTicket(req.params.id);
      return res.json(tickets);
    }

    if (req.user.role == 'user' && req.user._id == req.params.user) {
      const tickets = await Ticket.getTicket({ ...req.query, user: req.user._id });
      return res.json(tickets);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Ticket' });
  }
}

/**
 * @api {get} /tickets Get all Tickets
 * @apiName GetTickets
 * @apiGroup Ticket
 *
 * @apiUse Authentication
 * @apiUse ListQueryParams
 * @apiUse ModelQueryTicket
 * @apiUse OtherModelParams
 * @apiUse ModelTickets
 */
async function getTickets(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const tickets = await Ticket.getTickets(req.query);
      return res.json(tickets);
    }

    if (req.user.role == 'user' && req.user._id == req.query.user) {
      const tickets = await Ticket.getTickets({ ...req.query, user: req.user._id });
      return res.json(tickets);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Tickets' });
  }
}

/**
 * @api {post} /tickets Create new Ticket
 * @apiName CreateTicket
 * @apiGroup Ticket
 *
 * @apiUse Authentication
 * @apiUse ModelCreateTicket
 * @apiUse ModelTicket
 */
async function createTicket(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const ticket = await Ticket.createTicket(req.body);
      return res.json(ticket);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const ticket = await Ticket.createTicket(req.body);
      return res.json(ticket);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to create Ticket' });
  }
}

/**
 * @api {put} /tickets/:id Update Ticket by id
 * @apiName UpdateTicket
 * @apiGroup Ticket
 *
 * @apiUse Authentication
 * @apiParam {String} id id of Ticket to update
 * @apiUse ModelUpdateTicket
 * @apiUse ModelTicket
 */
async function updateTicket(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const ticket = await Ticket.updateTicket({_id: req.params.id}, req.body);
      return res.json(ticket);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const ticket = await Ticket.updateTicket({_id: req.params.id}, req.body);
      return res.json(ticket);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to update Ticket' });
  }
}

/**
 * @api {delete} /tickets/:id Delete Ticket by id
 * @apiName DeleteTicket
 * @apiGroup Ticket
 *
 * @apiUse Authentication
 * @apiParam {String} id id of Ticket to delete
 * @apiUse PopulateQueryParam
 * @apiUse ModelTicket
 */
async function deleteTicket(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const ticket = await Ticket.deleteTicket({_id: req.params.id}, req.body);
      return res.json(ticket);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const ticket = await Ticket.deleteTicket({_id: req.params.id}, req.body);
      return res.json(ticket);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Ticket' });
  }
}