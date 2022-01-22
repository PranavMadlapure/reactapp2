//cross origin request - request from one host to another
//http://localhost:3000   -     http://localhost:8081
//cors - install, require and use 

var exp = require('express');
var mysql = require('mysql2'); 
var cors = require('cors');   //third-party middleware
var bp = require('body-parser');

var app = exp();

//middleware
app.use(cors());      //allow to accept the request from another app
app.use(bp.urlencoded({extended: true}))   //req.body object gets populated


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root123",
	database: "knowit2111"
});

con.connect(function(err){
	if(!err)
		console.log("connected");
	else
		console.log(err.toString());
})


app.listen(8081,function(){
   console.log("REST API running on 8081");
})

//route
app.get('/emps',  function(req,res){
	con.query('select * from emp',function(err, result){
		if(!err)
			res.json(result);
	});
});

//route
app.post('/saveemp',function(req,res){
	//incomplete
        console.log(req.body.num);
});

app.all('*',function(req,res){
	res.send("Sorry, invalid URL");
})