var request_array;
if (window.XMLHttpRequest) {
	request_array=new XMLHttpRequest();
} else {
	request_array=new ActiveXObject("Microsoft.XMLHTTP");
}

request_array.open('GET', 'data.json');
request_array.onreadystatechange = function() {
	if ((request_array.status === 200) &&
		(request_array.readyState === 4)) {

			info_array = JSON.parse(request_array.responseText);

			var output='';
			for (var i = 0; i <= info_array.array.length -1; i++) {
				for (key in info_array.array[i]) {
					if (info_array.array[i].hasOwnProperty(key)) {
						output += '<li>' + 
						'<a href = "' + info_array.array[i][key] +
						'">' + key + '</a>';
						'</li>';
			    	}
				}
			}
			
			var update = document.getElementById('ajax_array');
			update.innerHTML = output;
			
	} //ready
} //event
request_array.send();