function dataHandler(info) {

	var output='';
	for (var i = 0; i < info_array.array.length; i++) {
		for (key in info_array.array[i]) {
			if (info_array.array[i].hasOwnProperty(key)) {
				output += '<li>' + 
				'<a href = "' + info_array.array[i][key] +
				'">' + key + '</a>';
				'</li>';
	    	}
		}
	}
	
	var update = document.getElementById('jquery');
	update.innerHTML = output;
}

// data.json

// dataHandler({
// 	"full_name" : "Ray Vilalobos",
// 	"title" : "Staff Author",
// 	"links" : 
// 		{ "blog" 	 : "http://blog.com" ,
// 		  "facebook" : "http://facebook.com" ,
// 		  "youtube"  : "http://youtube.com" ,
// 		  "podcast"  : "http://podcast.com" ,
// 		  "twitter"  : "http://twitter.com" }
// });