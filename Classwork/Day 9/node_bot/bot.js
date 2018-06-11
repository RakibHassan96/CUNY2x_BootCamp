// test to see if bot is running
console.log("Bot starting");

// import package
var Twit = require("twit");

var config = require("./config");

var T = new Twit(config);

var tweets;
var retweets = [];

T.get('search/tweets', 

	{ q: 'ayy lmao since:2018-01-01', 
	  count: 3 
	},

	function(err, data, response) {
  		tweets = data.statuses;
  		// var retweets = [];
  		for (var i = 0; i <tweets.length; i++) {
			retweets.push(tweets[i].text);
	  	}

	  	var start = 1;
		function reTweetGarbage(){
			var quote = retweets[start-1];
			console.log(start);

			console.log(quote);

			var tweet = {
				status: quote
			}

			T.post('statuses/update', { status: ( tweet.status + " # " + (Math.floor(Math.random() * 100)).toString() ) }, 
				function(err, data, response) {
			  		if (err) {
			  			console.log("ERROR!")
			  		}
			  		else {
			  			console.log("Working!")
			  		}
				}
			)

			start++;
			if( start <= retweets.length){
				setTimeout( reTweetGarbage, 5000 );
			}
		}

		reTweetGarbage();

	  	// console.log(retweets);
	  	// console.log(retweets.length);

	 //  	var count = 1;

	 //  	function reTweetGarbage(){
	 //  		while(count <= retweets.length){
	 //  			var quote = retweets[count - 1];
		// 		console.log(count);

		// 		console.log(quote);

		// 		var tweet = {
		// 			status: quote
		// 		}

		// 		T.post('statuses/update', { status: ( tweet.status + " # " + (Math.floor(Math.random() * 100)).toString() ) }, 
		// 			function(err, data, response) {
		// 	  			if (err) {
		// 	  				console.log("ERROR!")
		// 	  			}
		// 	  			else {
		// 	  				console.log("Working!")
		// 	  			}
		// 			}
		// 		)
		// 		count++;
	 //  		}
		// }


		// for(var count = 1; count <= retweets.length; count++){
		// 	setTimeout(function () {
		// 	  		var quote = retweets[count - 1];
		// 			console.log(count);

		// 			console.log(quote);

		// 			var tweet = {
		// 				status: quote
		// 			}

		// 			T.post('statuses/update', { status: ( tweet.status + " # " + (Math.floor(Math.random() * 100)).toString() ) }, 
		// 				function(err, data, response) {
		// 		  			if (err) {
		// 		  				console.log("ERROR!")
		// 		  			}
		// 		  			else {
		// 		  				console.log("Working!")
		// 		  			}
		// 				}
		// 			)
		//   		}, 3000 * count)
		// }
			
	}
)

// console.log(retweets.length);


// var i = 1;

// function reTweetGarbage(){
// 	var quote = retweets[i-1];

// 	var tweet = {
// 		status: quote
// 	}

// 	T.post('statuses/update', { status: tweet.status }, 
// 		function(err, data, response) {
//   			if (err) {
//   				console.log("ERROR!")
//   			}
//   			else {
//   				console.log("Working!")
//   			}
// 		}
// 	)
// }

// while(i < retweets.length){
// 	setTimeout(reTweetGarbage, 5000 * i);
// 	i++;
// }


// tweetIt();

// setInterval(tweetIt, 1000*20);

// function tweetIt(){
// 	var r = ["im a man", "im really a woman", "i guess i am what i eat", "-kanye west"];
// 	var quote = r[Math.floor(Math.random()*r.length)];

// 	var tweet = {
// 		status: quote
// 	};

// 	T.post('statuses/update', { status: tweet.status }, 
// 		function(err, data, response) {
//   		if (err) {
//   			console.log("ERROR!")
//   		}
//   		else {
//   				console.log("Working!")
//   		}
// 		}
// 	)
// }