var mysql = require('mysql');

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
    console.log(result);
	console.log(result);
	console.log(result);
	console.log(result);
  });
});