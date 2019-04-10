
var getJSONOnRequest = function(url, successHandler, errorHandler,contentType) {
	var xhr = typeof XMLHttpRequest != 'undefined'
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('get', url, false);
	if(contentType != undefined && contentType != null)
		{
		xhr.setRequestHeader("Content-Type",contentType );
		}	
//	xhr.setRequestHeader("dataType", "json");
	xhr.onreadystatechange = function() {
		var status;
		var data;
		// https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
		if (xhr.readyState == 4) { // `DONE`
			status = xhr.status;
			if (status == 200) {
				data = JSON.parse(xhr.responseText);
				successHandler && successHandler(data);
			} else {
				errorHandler && errorHandler(status);
			}
		}
	};
	xhr.send();
};




var postJSONOnRequest = function(url,params, successHandler, errorHandler,contentType) {
	var xhr = typeof XMLHttpRequest != 'undefined'
		? new XMLHttpRequest()
		: new ActiveXObject('Microsoft.XMLHTTP');
	xhr.open('POST', url, false);
	if(contentType != undefined && contentType != null)xhr.setRequestHeader("Content-Type",contentType );
//	  xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
//	   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	//   xhr.onload = requestComplete;
	
//	xhr.setRequestHeader("dataType", "json");
	xhr.onreadystatechange = function() {
		var status;
		var data;
		// https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
		if (xhr.readyState == 4) { // `DONE`
			status = xhr.status;
			if (status == 200) {
				data = JSON.parse(xhr.responseText);
				successHandler && successHandler(data);
			} else {
				errorHandler && errorHandler(status);
			}
		}
		else
			{
			errorHandler(null,xhr.readyState)
			}
	};
	if(params != undefined && params != null)
	   xhr.send(JSON.stringify(params));
	else
		xhr.send();
};