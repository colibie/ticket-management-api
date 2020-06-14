/**
 * @apiDefine ModelQueryCustomer
 * @apiParam {String} [firstName] firstName property
 * @apiParam {String} [lastName] lastName property
 * @apiParam {String} [email] email property
 * @apiParam {String} [phone] phone property
 */

/**
 * @apiDefine ModelCreateCustomer
 * @apiParam {String} firstName firstName property
 * @apiParam {String} [lastName] lastName property
 * @apiParam {String} email email property
 * @apiParam {String} phone phone property
 */

/**
 * @apiDefine ModelUpdateCustomer
 * @apiParam {String} [firstName] firstName property
 * @apiParam {String} [lastName] lastName property
 * @apiParam {String} [email] email property
 * @apiParam {String} [phone] phone property
 */

/**
 * @apiDefine ModelCustomer
 * @apiSuccess {String} firstName firstName property
 * @apiSuccess {String} lastName lastName property
 * @apiSuccess {String} email email property
 * @apiSuccess {String} phone phone property
 */

/**
 * @apiDefine ModelCustomers
 * @apiSuccess {Object[]} customer List of customer
 * @apiSuccess {String} customer.firstName customer.firstName property
 * @apiSuccess {String} customer.lastName customer.lastName property
 * @apiSuccess {String} customer.email customer.email property
 * @apiSuccess {String} customer.phone customer.phone property
 */

/**
 * @apiDefine ModelQueryMovie
 * @apiParam {String} [name] name property
 * @apiParam {String} [description] description property
 * @apiParam {String} [active] active property
 */

/**
 * @apiDefine ModelCreateMovie
 * @apiParam {String} name name property
 * @apiParam {String} [description] description property
 * @apiParam {Boolean} [active] active property
 */

/**
 * @apiDefine ModelUpdateMovie
 * @apiParam {String} [name] name property
 * @apiParam {String} [description] description property
 * @apiParam {Boolean} [active] active property
 */

/**
 * @apiDefine ModelMovie
 * @apiSuccess {String} name name property
 * @apiSuccess {String} description description property
 * @apiSuccess {Boolean} active active property
 */

/**
 * @apiDefine ModelMovies
 * @apiSuccess {Object[]} movie List of movie
 * @apiSuccess {String} movie.name movie.name property
 * @apiSuccess {String} movie.description movie.description property
 * @apiSuccess {Boolean} movie.active movie.active property
 */

/**
 * @apiDefine ModelQueryMovieLog
 * @apiParam {String} [movie] movie property
 */

/**
 * @apiDefine ModelCreateMovieLog
 * @apiParam {String} movie movie(ObjectId) property
 * @apiParam {String[]} [airDates] airDates property
 */

/**
 * @apiDefine ModelUpdateMovieLog
 * @apiParam {String} [movie] movie(ObjectId) property
 * @apiParam {String[]} [airDates] airDates property
 */

/**
 * @apiDefine ModelMovieLog
 * @apiSuccess {String} movie movie(ObjectId) property
 * @apiSuccess {String[]} airDates airDates property
 */

/**
 * @apiDefine ModelMovieLogs
 * @apiSuccess {Object[]} movieLog List of movieLog
 * @apiSuccess {String} movieLog.movie movieLog.movie(ObjectId) property
 * @apiSuccess {String[]} movieLog.airDates movieLog.airDates property
 */

/**
 * @apiDefine ModelQueryTicket
 * @apiParam {String} [movie] movie property
 * @apiParam {String} [capacity] capacity property
 * @apiParam {String} [expiry] expiry property
 * @apiParam {String} [sold] sold property
 */

/**
 * @apiDefine ModelCreateTicket
 * @apiParam {String} movie movie(ObjectId) property
 * @apiParam {Number} capacity=10 capacity property
 * @apiParam {String} expiry expiry property
 * @apiParam {Number} [sold] sold property
 */

/**
 * @apiDefine ModelUpdateTicket
 * @apiParam {String} [movie] movie(ObjectId) property
 * @apiParam {Number} [capacity=10] capacity property
 * @apiParam {String} [expiry] expiry property
 * @apiParam {Number} [sold] sold property
 */

/**
 * @apiDefine ModelTicket
 * @apiSuccess {String} movie movie(ObjectId) property
 * @apiSuccess {Number} capacity=10 capacity property
 * @apiSuccess {String} expiry expiry property
 * @apiSuccess {Number} sold sold property
 */

/**
 * @apiDefine ModelTickets
 * @apiSuccess {Object[]} ticket List of ticket
 * @apiSuccess {String} ticket.movie ticket.movie(ObjectId) property
 * @apiSuccess {Number} ticket.capacity=10 ticket.capacity property
 * @apiSuccess {String} ticket.expiry ticket.expiry property
 * @apiSuccess {Number} ticket.sold ticket.sold property
 */

/**
 * @apiDefine ModelQueryTicketLog
 * @apiParam {String} [ticket] ticket property
 */

/**
 * @apiDefine ModelCreateTicketLog
 * @apiParam {String} ticket ticket(ObjectId) property
 * @apiParam {String[]} customers customers(ObjectId) property
 */

/**
 * @apiDefine ModelUpdateTicketLog
 * @apiParam {String} [ticket] ticket(ObjectId) property
 * @apiParam {String[]} [customers] customers(ObjectId) property
 */

/**
 * @apiDefine ModelTicketLog
 * @apiSuccess {String} ticket ticket(ObjectId) property
 * @apiSuccess {String[]} customers customers(ObjectId) property
 */

/**
 * @apiDefine ModelTicketLogs
 * @apiSuccess {Object[]} ticketLog List of ticketLog
 * @apiSuccess {String} ticketLog.ticket ticketLog.ticket(ObjectId) property
 * @apiSuccess {String[]} ticketLog.customers ticketLog.customers(ObjectId) property
 */

/**
 * @apiDefine ModelQueryUser
 * @apiParam {String} [firstName] firstName property
 * @apiParam {String} [lastName] lastName property
 * @apiParam {String} [email] email property
 * @apiParam {String} [phone] phone property
 * @apiParam {String} [role] role property
 */

/**
 * @apiDefine ModelCreateUser
 * @apiParam {String} firstName firstName property
 * @apiParam {String} [lastName] lastName property
 * @apiParam {String} email email property
 * @apiParam {String} phone phone property
 * @apiParam {String="user,admin"} [role=user] role property
 */

/**
 * @apiDefine ModelUpdateUser
 * @apiParam {String} [firstName] firstName property
 * @apiParam {String} [lastName] lastName property
 * @apiParam {String} [email] email property
 * @apiParam {String} [phone] phone property
 * @apiParam {String="user,admin"} [role=user] role property
 */

/**
 * @apiDefine ModelUser
 * @apiSuccess {String} firstName firstName property
 * @apiSuccess {String} lastName lastName property
 * @apiSuccess {String} email email property
 * @apiSuccess {String} phone phone property
 * @apiSuccess {String="user,admin"} role=user role property
 */

/**
 * @apiDefine ModelUsers
 * @apiSuccess {Object[]} user List of user
 * @apiSuccess {String} user.firstName user.firstName property
 * @apiSuccess {String} user.lastName user.lastName property
 * @apiSuccess {String} user.email user.email property
 * @apiSuccess {String} user.phone user.phone property
 * @apiSuccess {String="user,admin"} user.role=user user.role property
 */
