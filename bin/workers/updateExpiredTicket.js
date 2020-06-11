const { forEach } = require('lodash');

const Ticket = require('../../data/ticket');
const { delay } = require('../../data/utils');
const TICKET_PROCESS_LIMIT = process.env.TICKET_PROCESS_LIMIT || 500;

module.exports = {
  task: async () => {
    console.log('************ ticket processor worker starting **************');
    try {
      const tickets = await Ticket.getTickets({
        expiry: { $lt: new Date() },
        expired: false,
        _limit: TICKET_PROCESS_LIMIT,
        _select: '_id',
      });
      console.log(`************ ticket processor worker ${tickets.length} **************`);
      if (tickets.length > 0) {
        forEach(tickets, async ticket => await Ticket.updateTicket(ticket.id, { expired: true }));
      }
      await delay(60000);
    } catch (error) {
      console.error(error);
    }
  },
};