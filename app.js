const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const movieLogsRouter = require('./routes/movieLogs');
const ticketsRouter = require('./routes/tickets');
const customersRouter = require('./routes/customers');
const ticketLogsRouter = require('./routes/ticketLogs');

const { verify } = require('./controllers/auth');

const app = express();

app.use(cors());
app.options('*', cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// check user auth credentials
// and carry out any preprocessing
app.use(verify);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/movieLogs', movieLogsRouter);
app.use('/tickets', ticketsRouter);
app.use('/ticketLogs', ticketLogsRouter);
app.use('/customers', customersRouter);
app.use('/apidocs', express.static('apidoc'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
