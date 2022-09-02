var mongoose = require('mongoose')
var createError = require('http-errors');
var config = require("./config/db")
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogRouter = require("./routes/posts")

mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log("Connected to database ");
})

mongoose.connection.on('error', (err) => {
  console.log("error while connecting to database " + err)
})




var app = express();

app.use(cors());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', blogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
const server = require('http').Server(app);

const PORT = process.env.PORT || 3100;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
