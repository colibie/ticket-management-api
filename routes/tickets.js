var express = require('express');
var router = express.Router();
const ticketController = require('../controllers/ticket');

/* GET ticket listing. */
router.get('/', ticketController.getTickets);

/* Create event */
router.post('/', ticketController.createTicket);

/* GET ticket by id. */
router.get('/:id', ticketController.getTicket);

/* UPDATE ticket listing. */
router.put('/update/:id', ticketController.updateTicket);

/* DELETE ticket listing. */
router.delete('/delete/:id', ticketController.deleteTicket);

module.exports = router;
