var express = require('express');
var router = express.Router();
const usersController = require('../controllers/user')

/* GET users listing. */
router.get('/', usersController.getUsers);

router.post('/', usersController.createUser);

/* GET users by id. */
router.get('/:id', usersController.getUser);

/* UPDATE users listing. */
router.put('/update/:id', usersController.updateUser);

/* DELETE user listing. */
router.delete('/delete/:id', usersController.deleteUser);

module.exports = router;
