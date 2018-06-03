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

let port = 4477;

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

class Grade{
  constructor(id, name, course, grade){
    this.id = id;
    this.name = name;
    this.course = course;
    this.grade = grade;
  }
}
let gradesData = [];
gradesData.push(new Grade(1, 'Asaad Saad', 'CS572', 95));


app.get('/grades', function(req, res){
  console.log('Getting All Grades!');
  
  if(gradesData.length > 0){
    res.status(200);
    res.json(gradesData);
  }else{
    res.status(204);
    res.send();
  }

});

app.get('/grades/:gradeId', function(req, res, next){
  console.log('Getting Grade by ID: ' + req.params.gradeId);
  for(let grd of gradesData){
    if(grd.id == req.params.gradeId){
      res.status(200);
      res.json(grd);
      return;
    }
  }

  res.status(204);
  // res.json({message: "Grade Not Found", returnCode: 204});
  res.send();
});

/* Example {"id": 5, "name": "Saeed Saeed", "course": "CS579", "grade": 97} */
app.post('/grades/add', function(req, res){
  console.log('Checking Grade Parameters for POST Add!');

  req.assert('id', 'Id is required').notEmpty();
  req.assert('name', 'name is required').notEmpty();
  req.assert('course', 'course is required').notEmpty();
  req.assert('grade', 'grade is required').notEmpty();

  let errors = req.validationErrors();

  if(errors){
    res.status(422).json({ errors: errors });
  }else{
    const grade = new Grade(req.body.id, req.body.name, req.body.course, req.body.grade);    
    console.log('Adding Current Grade: ' + grade.id);
    gradesData.push(grade);
    res.status(201).json(grade);
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
