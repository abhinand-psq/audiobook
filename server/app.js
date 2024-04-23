var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./Database/mongodb')
const cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
 const bodyParser = require('body-parser')
 
var app = express();
db.connect((cb)=>{
if(cb){
console.log('database not connected'+cb);
}else{
console.log('database connected');
}
})
app.use(bodyParser.json())
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static((__dirname+'/uploads')))
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
