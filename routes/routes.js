//------------------------------------------IMPORT---------------------------------------------------------------------/
const express = require('express');
const mysql = require('mysql');
const app = express();
const net = require('net');
//const reload = require('reload');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mac = require('getmac');
var HOST = '203.128.241.216';
var PORT =  3000;
var key ;
var name;
var thietbi=[];
var device;
//Create app server 
server.listen(3000,function(){
	console.log("Server is listening on port 3000");
});

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));

//---------------------------------------------------DATABASE-----------------------------------------------------------/
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "battleship"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM player ", function (err, result, fields) {
    if (err) throw err;
  });
});
//---------------------------------------------------XU LY ---------------------------------------------------/
io.on("connection", function(socket){
	console.log(socket.id +" is connected");
	
	socket.on("disconnect",function(){
		console.log(socket.id + "disconnected");
	
	});
	//
	socket.on("Toa-do",function(toado){
		console.log("Coordinates:" + "A"+ toado);
	});
	
		// Receive name of keypad
		socket.on("Xac-thuc",function(data){
				device = data;
				console.log("Thiet bi da chon: "+device);
	app.post('/name', function(req, res) {		
		name = req.query.state;
				
			if((device = 123)&& (name=="Device01")){

			console.log("name=" + name);
			socket.device = name;
			io.sockets.emit("List-device", thietbi);
			io.sockets.emit("Sent-name", name);
			// Receive value of keypad
			app.post('/key', function(keyreq, keyres) {	
	
				key = keyreq.query.state;
				keyres.send('Data received: ' + key);
				console.log("key:" + key);
				socket.emit("Sent-key-from-AAA", key);
	});
		}else{
			console.log("Thiet bi khong hop le");
		};
		
	});
});
});

// Display on website
app.get('/',function(req,res){
res.render('home');
});
