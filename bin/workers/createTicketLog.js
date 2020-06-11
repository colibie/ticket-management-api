const { map } = require('lodash');

const Ticket = require('../../data/ticket');
const TicketLog = require('../../data/ticketLog');
const { delay } = require('../../data/utils');
const TICKET_PROCESS_LIMIT = process.env.TICKET_PROCESS_LIMIT || 500;

module.exports = {
  task: async () => {
    console.log('************ ticketLog processor worker starting **************');
    try {
      const tickets = await Ticket.getTickets({
        logCreated: false,
        _limit: TICKET_PROCESS_LIMIT,
        _select: '_id',
      });
      console.log(`************ ticketLog processor worker ${tickets.length} **************`);
      if (tickets.length > 0) {
        const promises = map(tickets, async (ticket) => {
          await TicketLog.createTicketLog({ ticket: ticket._id });
          await Ticket.updateTicket(ticket.id, { logCreated: true });
        });
        await Promise.all(promises);
      }
      await delay(60000);
    } catch (error) {
      console.error(error);
    }
  },
};