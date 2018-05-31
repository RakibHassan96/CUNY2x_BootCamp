var Album = {

	photos : [
	{
		name: "summertime",
		location: "documents/rakib"
	},
	{
		name: "winter",
		location: "desktop"
	}],

	addPhoto: function(n, l)
	{
		x = 
		{
			name : n,
			location : l,
		};

		Album.photos.push(x);
	},

	listPhotos: function()
	{
		for(x = 0; x < Album.photos.length; x++)
		{
			console.log("Photo #: " + x)
			console.log("Name: " + Album.photos[x].name);
			console.log("Location: " + Album.photos[x].location);
		}
	},

	getPhoto: function(x)
	{
		console.log("Photo #: " + x)
		console.log("Name: " + Album.photos[x].name);
		console.log("Location: " + Album.photos[x].location);
	}
	
};