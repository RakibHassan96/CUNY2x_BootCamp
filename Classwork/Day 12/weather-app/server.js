const bodyParser = require('body-parser');
const request = require('request');
const argv = require('yargs').argv;
const express = require('express');
const app = express();

const apiKey = 'a7ce9c609422fbdbee9a9b07ffdd56d4';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
 	res.render('index', {weather: null, maxMin: null,error: null})
})

app.post('/', function (req, res) {
 	let city = req.body.city || agrv.c;
 	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

	request(url, function (err, response, body) {
		if(err){
	  		res.render('index', {weather: null, maxMin: null, error: 'Error, please try again'});
	  	} else {
	  		let weather = JSON.parse(body);
	  		if(weather.main == undefined){
	  			res.render('index', {weather: null, maxMin:null, error: 'Error, please try again'});
	  		} else {
	  			let weatherText = `It's ${weather.main.temp}° in ${weather.name}!`;
	  			let maxMinText = `H ${weather.main.temp_max}° / L ${weather.main.temp_min}°`
	    		res.render('index', {weather: weatherText, maxMin: maxMinText, error: null});
			}
	  	}
	});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
