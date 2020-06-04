const Customer = require('../data/customer');

module.exports = {
  getCustomer,
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer
};

/**
 * @api {get} /customers/:id Get Customer by id
 * @apiName GetCustomer
 * @apiGroup Customer
 *
 * @apiUse Authentication
 * @apiParam {String} id id of Customer to retrieve
 * @apiUse PopulateQueryParam
 * @apiUse ModelCustomer
 */
async function getCustomer(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const customers = await Customer.getCustomer(req.params.id);
      return res.json(customers);
    }

    if (req.user.role == 'user' && req.user._id == req.params.user) {
      const customers = await Customer.getCustomer({ ...req.query, user: req.user._id });
      return res.json(customers);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Customers' });
  }
}

/**
 * @api {get} /customers Get all Customers
 * @apiName GetCustomers
 * @apiGroup Customer
 *
 * @apiUse Authentication
 * @apiUse ListQueryParams
 * @apiUse ModelQueryCustomer
 * @apiUse OtherModelParams
 * @apiUse ModelCustomers
 */
async function getCustomers(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const customers = await Customer.getCustomers(req.query);
      return res.json(customers);
    }

    if (req.user.role == 'user' && req.user._id == req.query.user) {
      const customers = await Customer.getCustomers({ ...req.query, user: req.user._id });
      return res.json(customers);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Customers' });
  }
}

/**
 * @api {post} /customers Create new Customer
 * @apiName CreateCustomer
 * @apiGroup Customer
 *
 * @apiUse Authentication
 * @apiUse ModelCreateCustomer
 * @apiUse ModelCustomer
 */
async function createCustomer(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const customer = await Customer.createCustomer(req.body);
      return res.json(customer);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const customer = await Customer.createCustomer(req.body);
      return res.json(customer);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to create Customer' });
  }
}

/**
 * @api {put} /customers/:id Update Customer by id
 * @apiName UpdateCustomer
 * @apiGroup Customer
 *
 * @apiUse Authentication
 * @apiParam {String} id id of Customer to update
 * @apiUse ModelUpdateCustomer
 * @apiUse ModelCustomer
 */
async function updateCustomer(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const customer = await Customer.updateCustomer({_id: req.params.id}, req.body);
      return res.json(customer);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const customer = await Customer.updateCustomer({_id: req.params.id}, req.body);
      return res.json(customer);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to update Customer' });
  }
}

/**
 * @api {delete} /customers/:id Delete Customer by id
 * @apiName DeleteCustomer
 * @apiGroup Customer
 *
 * @apiUse Authentication
 * @apiParam {String} id id of Customer to delete
 * @apiUse PopulateQueryParam
 * @apiUse ModelCustomer
 */
async function deleteCustomer(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const customer = await Customer.deleteCustomer({_id: req.params.id}, req.body);
      return res.json(customer);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const customer = await Customer.deleteCustomer({_id: req.params.id}, req.body);
      return res.json(customer);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Customer' });
  }
}