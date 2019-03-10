var express = require("express");
var app = express();

app.get("/url/:param", (req, res, next) => {
	var size = 0;
	var dump;
	var resultsArray = new Array();
	const fs = require('fs');
	fs.readFile('quotes.txt', function(err, data) {

		if(err) {
			console.log("Error with the file");
			throw err;
		}
		

		// Get an array of lines from the text file
		var lines = data.toString().split('\n');
		var keyword = req.params.param.toLowerCase();


		console.log(keyword);
		lines.forEach(function(line){
			// console.log(line.toLowerCase());
			if(line.toLowerCase().includes(keyword)){
				console.log("Found a match");
				console.log(line.substring(0, 8));
				resultsArray.push(line.substring(0, 8));
			}
		});
		console.log("result array is \n"+resultsArray.length);
		res.json(resultsArray);
	});	
});

app.listen(process.env.PORT || 3000, () => {
 console.log("Server running on port "+process.env.PORT);
});