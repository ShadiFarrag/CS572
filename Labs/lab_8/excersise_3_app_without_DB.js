var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

const validator = require('express-validator');
//const { check, validationResult } = require('express-validator/check');
//const { matchedData, sanitize } = require('express-validator/filter');

var app = express();

let port = 4377;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.set('env', 'development');
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(validator());


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

class XXPoint{
  constructor(name, category, location){
    this.name = name;
    this.category = category;
    this.location = location;
  }
}
let pointsData = [];
pointsData.push(new XXPoint('Maharishi School', 'School', [-91.967036,41.015438]));


app.get('/points', function(req, res){
  console.log('Getting All Points!');
  
  if(pointsData.length > 0){
    res.status(200);
    res.json(pointsData);
  }else{
    res.status(204);
    res.send();
  }

});

app.get('/points/point', function(req, res, next){
  let pointNameParam = req.query.pointName;
  console.log('Getting Point by Name: ' + pointNameParam);
  for(let point of pointsData){
    if(point.name == pointNameParam){
      res.status(200);
      res.json(point);
      return;
    }
  }

  res.status(204);
  res.send();
});


app.delete('/points/point', function(req, res, next){
  let pointNameParam = req.query.pointName;
  console.log('Deleting Point by Name: ' + pointNameParam);
  for(let key in pointsData){
    if(pointsData[key].name == pointNameParam){
      pointsData.splice(key,1);
      res.status(202).send();
      return;
    }
  }
  res.status(204);
  res.send();
});

app.post('/points', function(req, res){
  console.log('Checking Points Parameters for POST Add!');

  req.assert('name', 'name is required').notEmpty();
  req.assert('category', 'course is required').notEmpty();
  req.assert('location', 'location is required, and should be array of 2 elements')
      .isArray().notEmpty();

  let errors = req.validationErrors();

  if(errors){
    res.status(422).json({ errors: errors });
  }else{
    const point = new XXPoint(req.body.name, req.body.category, req.body.location);    
    console.log('Adding Current Grade: ' + point.name);
    pointsData.push(point);
    res.status(201).send();
  }
});

app.put('/points/point', function(req, res){
  console.log('Checking Points Parameters for PUT!');

  req.assert('name', 'name is required').notEmpty();
  req.assert('category', 'course is required').notEmpty();
  req.assert('location', 'location is required, and should be array of 2 elements')
        .isArray().notEmpty();

  let errors = req.validationErrors();

  if(errors){
    res.status(422).json({ errors: errors });
  }else{
    let pointNameParam = req.query.pointName;
    console.log('Putting Point by Name: ' + pointNameParam);
    const point = new XXPoint(req.body.name, req.body.category, req.body.location);
    let found = false;

    for(let key in pointsData){
      if(pointsData[key].name == pointNameParam){
        console.log('Updating Current Point: ' + point.name);
        found = true;
        pointsData[key] = point;
        break;
      }
    }

    if(!found){
      console.log('Adding New Point: ' + point.name);
      pointsData.push(point);
    }
    res.status(202).send();
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  /*res.render('error');*/

  res.json({message: err.message, returnCode: err.status || 500});

});

app.listen(port, function(){
  console.log('The Server is running on port %s', port);
});


// module.exports = app;
