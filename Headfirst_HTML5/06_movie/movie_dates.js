function Movie(title, genre, rating, showtimes) {	
	this.title = title;
	this.genre = genre;
	this.rating = rating;
	this.showtimes = showtimes;
	
	this.getNextShowing = function() {	
		var now = new Date().getTime();
			
		for (var i = 0; i < this.showtimes.length; i++) {
			var showtime = getTimeFromString(this.showtimes[i]);
			
			if ((showtime - now) > 0) {
				return "Next showing of " + this.title + " is " + this.showtimes[i];
			}
		}
	};
}

// This is the buggy code from the book...

// function getTimeFromString(timeString) {
// 	var theTime = new Date();
// 	var time = timeString.match(/(\d+) (?::(\d\d))?\s*(p?)/);
// 	theTime.setHours( parseInt(time[1]) + (time[3] ? 12: 0) );
// 	theTime.setHours( parseInt(time[2]) || 0);
// 	return theTime.getTime(); 
// }

// And this is the code I copied from the downloaded example...

function getTimeFromString(str) {
	var theTime = new Date();
	var time = str.match(/(\d+)(?::(\d\d))?\s*(p?)/);
	theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
	theTime.setMinutes( parseInt(time[2]) || 0 );
	return theTime.getTime();
}

var banzaiMovie = new Movie("Buckaroo Banzai",
							"Cult Classic",
							5,
							["1:00pm","5:00pm","7:00pm","11:00pm"]);

var plan9Movie = new Movie("Plan 9 from Outer Space",
						   "Cult Classic",
						   2,
						   ["3:00pm","7:00pm","11:00pm"]);

var forbiddenPlanetMovie = new Movie("Forbidden Planet",
									 "Classic Sci-fi",
									 5,
									 ["5:00pm","9:00pm"]);


alert(banzaiMovie.getNextShowing());

alert(plan9Movie.getNextShowing());

alert(forbiddenPlanetMovie.getNextShowing());












