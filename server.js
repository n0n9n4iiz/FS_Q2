var express = require('express');
var mysql = require('mysql');

var app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('pages/index');
});




app.get('/student',function(req,res){
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
connection.connect()
var sql = 'select * from students';
connection.query(sql, function (err, rows) {
    
    res.render('pages/student',{student: rows})
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  })
 connection.end();
})


app.get('/subject',function(req,res){
    var connection = mysql.createConnection({
      host     : 'www.db4free.net',
      user     : 's140390',
      password : 'abc123**',
      database : 'db140390'
    });
    connection.connect()
    var sql = 'select * from subjects';
    connection.query(sql, function (err, rows) {
        
        res.render('pages/subject',{subject: rows})
        if (err) throw err
      
        console.log('The solution is: ', rows[0].solution)
      })
      connection.end();
    })






console.log('App is runnig at http://localhost:8080')
app.listen(8080);