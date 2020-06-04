const jwt = require("jsonwebtoken");
const createError = require('http-errors');
const User = require("../data/user");
const { TOKEN_SECRET } = require("../config");
const { get } = require("lodash");

module.exports = {
  verify,
  login,
  signup
}

async function verify(req, res, next) {
  try {
    if (req.headers.authorization) {
      const [,tk] = req.headers.authorization.split(" ");
      const decoded = jwt.verify(tk, TOKEN_SECRET);
      const user = await User.getUser(decoded.data);
      // confirm if you really need to store all of users data
      if (!user) next(createError(404, "user not found"));
      req.user = user;
    }
    return next();
  } catch (error) {
    next(createError(error));
  }  
}

/**
 * @api {post} /login login with email and password
 * @apiName LoginPost
 * @apiGroup Auth
 * @apiParam email user email address
 * @apiParam password user password
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "............."
 *     }
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "message": "email or password incorrect"
 *     }
 */

 async function login(req, res) {
  try {
    let { email, password } = req.body;

    const user = await User.authenticate(email, password);

    if(!user) return res.status(401).json({ message: 'email or password incorrect' });

    const token = jwt.sign({
      data: user._id,
    }, TOKEN_SECRET);

    return res.json({ ...user._doc, _token: token });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'email or password incorrect' });
  }
}

/**
 * @api {post} /signup Signup New User
 * @apiName Signup
 * @apiGroup Auth
 *
 * @apiParam {String} [firstName] User's firsname
 * @apiParam {String} [lastName] User's lastName
 * @apiParam {String} email Unique email of new user
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_token": "............."
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 403 Conflict
 *     {
 *       "message": "operation not allowed"
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "message": "email already exists"
 *     }
 */

async function signup(req, res) {
  try {
    const {
      firstName, lastName, email, phone, password, role,
    } = req.body;

    const user = await User.createUser(email, password, {
      firstName,
      lastName,
      phone,
      role,
    });
    const token = jwt.sign({
      data: user._id,
    }, TOKEN_SECRET);

    return res.json({ ...user._doc, _token: token });
  } catch (error) {
    console.error(error);
    return res.status(409).json({ message: get(error, 'message', 'failed to signup') });
  }
}