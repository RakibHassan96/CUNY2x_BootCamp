var express = require('express');
var app = express();

app.set('view engine', 'pug');

var runningbacks = [
    "Barry Sanders",
    "Jim Brown",
    "Walter Payton",
]


// var runningbacks = [
//     {   
//         id: 1,
//         name: "Barry Sanders"
//     },
//     {   
//         id: 2,
//         name: "Jim Brown"
//     },
//     {   
//         id: 3,
//         name: "Walter Payton"
//     },
//     {   
//         id: 4,
//         name: "Eric Dickerson"
//     }
// ]

app.use(express.static(__dirname + '/views/styles'));


app.get('/', function(req, res){
 	res.render('runningbacks', {runningbacks});
});

app.get('/rbs/barry', function(req, res){
    res.render('players/barry', {runningbacks});
});

app.get('/rbs/jim', function(req, res){
    res.render('players/jim', {runningbacks});
});

app.get('/rbs/walter', function(req, res){
    res.render('players/walter', {runningbacks});
});


app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});
