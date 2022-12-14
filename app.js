var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dbo = require('./db/conn');
var postsRouter = require('./routes/posts');
var onePostRouter = require('./routes/post')
var cors = require('cors');



var app = express();


// call app middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// get one post 
app.use('/onepost', onePostRouter);
// get all posts
app.use('/allposts', postsRouter);

// get index page
app.get('/', function (req, res) {
  res.send("App is running");
});

// connect to database.
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
   process.exit();
  }
});

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
