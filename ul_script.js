// проверка для старых браузеров IE, использует ли браузер XMLHttpRequest(XHR) или Microsoft ActiveXObject
var request;
if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}


// открываем запрос, запрашивая файл
request.open('GET', 'data.json');

// запрос статуса событий
request.onreadystatechange = function() {
	// мониторим статус событий
	if((request.status == 200) &&
		// состояние готовности запроса
		(request.readyState === 4)) {

		// вставляет данные как объект
		// данные возвращаются как строка responseText
		// чтобы конвертировать строку в объект javascript, 
		// нужно сделать ее парсинг и вывести в том виде, в котором нам надо - упорядоченный список
		var info = JSON.parse(request.responseText);

		
		// если все отлично с данными
		var output = '';
			for(var key in info.links) {
				console.log(key);
				output += '<li>' +
				'<a href = "' + info.links[key] + 
				'">' + key + '</a>';
				'</li>';
			}
		
		// получаем элемент
		var update = document.getElementById('ajax_objects');
		// обновляем его внутренний HTML
		update.innerHTML = output
	}
}
// посылаем запрос на сервер, если проверки пройдены успешно
// выполняет request.onreadystatechange = function()
request.send();