var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contactoRouter = require('./routes/contacto');
var sobreNosotrosRouter = require('./routes/sobre_nosotros');
var establecimientosAdminRouter = require('./routes/adminEstablecimientos');
//cliente
var establecimientosRouter = require('./routes/establecimientos');
//api
var comerciosApiRouter = require('./routes/api/comercios');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//todas las rutas cliente
app.use('/', indexRouter);
app.use('/contacto', contactoRouter);
app.use('/sobre_nosotros', sobreNosotrosRouter);
app.use('/establecimientos', establecimientosRouter);
//admin
app.use('/admin/establecimientos', establecimientosAdminRouter);
//API
app.use('/api/comercios', comerciosApiRouter);

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
  res.render('error', {error: err});
});

module.exports = app;
