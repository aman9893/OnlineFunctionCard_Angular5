
var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'aman12345', //mysql database password
  database : 'demo' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
connection.on('error', function(err) {
  console.log("[mysql error]",err);
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(4000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all results
app.get('/employees', function (req, res) {
   connection.query('select * from employee', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

//rest api to get a single employee data
app.get('/employees/:id', function (req, res) {
   console.log(req);
   connection.query('select * from employee where id=?', [req.params.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

//rest api to create a new record into mysql database
app.post('/employees', function (req, res) {
  var postData  = req.body;
  console.log(postData)
  connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

//rest api to update record into mysql database
app.put('/employees', function (req, res) {
   connection.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

//rest api to delete record from mysql database
app.delete('/employees', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `employee` WHERE `id`=?', [req.body.id], function (error, results, fields) {
   if (error) throw error;
   res.end('Record has been deleted!');
 });
});
