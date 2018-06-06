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
const MongoClient = require('mongodb').MongoClient;

var app = express();

let port = 4377;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'lab8';

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

  MongoClient.connect(mongoUrl, function (err, client) {
    if (err) throw err;
    console.log("Connected to DB Server!");
    const db = client.db(dbName);

    db.collection('xxpoints').find({}).toArray(function (err, docsArr) {
      if (err) throw err;

      if(docsArr.length > 0){
        res.status(200);
        res.json(docsArr);
      }else{
        res.status(204);
        res.send();
      }

      client.close();

    });
  });  

});

app.get('/points/point', function(req, res, next){
  let pointNameParam = req.query.pointName;
  console.log('Getting Point by Name: ' + pointNameParam);

  MongoClient.connect(mongoUrl, function (err, client) {
    if (err) throw err;
    console.log("Connected to DB Server!");
    const db = client.db(dbName);

    let query = {'name': pointNameParam};
    db.collection('xxpoints').findOne(query, function (err, doc) {
      if (err) throw err;

      if(doc){
        res.status(200);
        res.json(doc);
      }else{
        res.status(204);
        res.send();
      }

      client.close();

    });
  });    

});


app.delete('/points/point', function(req, res, next){

  let pointNameParam = req.query.pointName;
  console.log('Deleting Point by Name: ' + pointNameParam);

  MongoClient.connect(mongoUrl, function (err, client) {
    if (err) throw err;
    console.log("Connected to DB Server!");
    const db = client.db(dbName);

    let query = {'name': pointNameParam};
    db.collection('xxpoints').remove(query, function (err, docsRemoved) {
      if (err) throw err;

      console.dir('Documents Removed: ' + docsRemoved);
      
      if(docsRemoved){
        res.status(202).send();
      }else{
        res.status(204).send();
      }

      // db.close();
      client.close();
      // return;
    });
  });    

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
    console.log('Adding New Point: ' + point.name);

    MongoClient.connect(mongoUrl, function (err, client) {
      if (err) throw err;
      console.log("Connected to DB Server!");
      const db = client.db(dbName);
  
      db.collection('xxpoints').insert(point, function (err, docInserted) {
        if (err) throw err;
        if(docInserted){
          res.status(201).send();
        }else{
          res.status(204);
          res.send();
        }
        client.close();
      });
    });   
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
    

    MongoClient.connect(mongoUrl, function (err, client) {
      if (err) throw err;
      console.log("Connected to DB Server!");
      const db = client.db(dbName);
  
      const query = {'name': pointNameParam};
      const options = {'upsert':true};

      db.collection('xxpoints').update(query,point,options, function (err, nUpserted) {
        if (err) throw err;
  
        console.dir('Successfully Upserted: ' + nUpserted);
        
        if(nUpserted){
          res.status(202).send();
        }else{
          res.status(204).send();
        }
  
        client.close();
  
      });
    });

  }
});

/* Examples */
/* http://localhost:4377/points/near-points?pointName=Paradiso&pointCategory=Cafe */
/* http://localhost:4377/points/near-points */
app.get('/points/near-points', function(req, res){

  let pointNameParam = req.query.pointName;
  let pointCategoryParam = req.query.pointCategory;

  console.log('Getting Near Points');
  console.log('Query Point Name: ' + pointNameParam);
  console.log('Query Point Category: ' + pointCategoryParam);

  MongoClient.connect(mongoUrl, function (err, client) {
    if (err) throw err;
    console.log("Connected to DB Server!");
    const db = client.db(dbName);

    let query = {};
    
    if(pointCategoryParam && pointNameParam){
      query = {'location': {'$near': [-91.9665342,41.017654]}, 'category':pointCategoryParam, 'name': pointNameParam};
    }else if(pointCategoryParam){
      query = {'location': {'$near': [-91.9665342,41.017654]}, 'category':pointCategoryParam};
    }else if(pointNameParam){
      query = {'location': {'$near': [-91.9665342,41.017654]}, 'name': pointNameParam};
    }else{
      query = {'location': {'$near': [-91.9665342,41.017654]}};
    }
    
    

    db.collection('xxpoints').find(query).limit(3).toArray(function (err, docsArr) {
      if (err) throw err;

      if(docsArr.length > 0){
        res.status(200);
        res.json(docsArr);
      }else{
        res.status(204);
        res.send();
      }

      client.close();

    });
  });  

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
