// проверка что документ завершил загрузку и что jquery загрузилось правильно 
$(document).ready(function() {

	// получить JSON('имя файла', функция которая принимает в info)
	$.getJSON ('data.json', function(info) {
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

	}); //getJSON 
}); // ready

