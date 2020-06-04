const User = require('../data/user');

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};

/**
 * @api {get} /users/:id Get User by id
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiUse Authentication
 * @apiParam {String} id id of User to retrieve
 * @apiUse PopulateQueryParam
 * @apiUse ModelUser
 */
async function getUser(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const user = await User.getUser(req.params.id, req.query);
      if (!user) return res.status(404).json({ message: 'User not found' });
      return res.json(user);
    }

    return res.status('403').json({ message: 'operation not allowed' });

  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch User' });
  }
}

/**
 * @api {get} /users Get all Users
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiUse Authentication
 * @apiUse ListQueryParams
 * @apiUse ModelQueryUser
 * @apiUse OtherModelParams
 * @apiUse ModelUsers
 */
async function getUsers(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const users = await User.getUser(req.query);
      return res.json(users);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch Users' });
  }
}

/**
 * @api {post} /users Create new User
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiUse Authentication
 * @apiUse ModelCreateUser
 * @apiUse ModelUser
 */
async function createUser(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }

    if (req.user.role == 'admin') {
      const user = await User.createUser(data);
      return res.json(user);
    }

    return res.status('403').json({ message: 'operation not allowed' });

   
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to create User' });
  }
}

/**
 * @api {put} /users/:id Update User by id
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiUse Authentication
 * @apiParam {String} id id of User to update
 * @apiUse ModelUpdateUser
 * @apiUse ModelUser
 */
async function updateUser(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const user = await User.updateUser({_id: req.params.id}, req.body);
      return res.json(user);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const user = await User.updateUser({_id: req.params.id}, req.body);
      return res.json(user);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    console.log(error);
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to update User' });
  }
}

/**
 * @api {delete} /users/:id Delete User by id
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiUse Authentication
 * @apiParam {String} id id of User to delete
 * @apiUse PopulateQueryParam
 * @apiUse ModelUser
 */
async function deleteUser(req, res) {
  try {
    if (!req.user) {
      return res.status('403').json({ message: 'operation not allowed' });
    }
    
    if (req.user.role == 'admin') {
      const user = await User.deleteUser({_id: req.params.id}, req.body);
      return res.json(user);
    }
    if (req.user.role == 'user' && req.user._id == req.body.user) {
      const user = await User.deleteUser({_id: req.params.id}, req.body);
      return res.json(user);
    }

    return res.status('403').json({ message: 'operation not allowed' });
  } catch (error) {
    return res.status(error.message ? 400 : 500).json({ message: error.message || 'failed to fetch User' });
  }
}