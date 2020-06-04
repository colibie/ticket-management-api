var express = require('express');
var router = express.Router();
const ticketLogController = require('../controllers/ticketLog');

/* GET ticketLog listing. */
router.get('/', ticketLogController.getTicketLogs);

/* Create event */
router.post('/', ticketLogController.createTicketLog);

/* GET ticketLog by id. */
router.get('/:id', ticketLogController.getTicketLog);

/* UPDATE ticketLog listing. */
router.put('/update/:id', ticketLogController.updateTicketLog);

/* DELETE ticketLog listing. */
router.delete('/delete/:id', ticketLogController.deleteTicketLog);

module.exports = router;
