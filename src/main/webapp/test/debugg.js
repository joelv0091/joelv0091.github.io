/*window.addEventListener("load", function() {
	FastClick.attach(document.body);
}, false);*/
var config1 = {
		"users": {
			url: "https://reqres.in/api/users?page=2",
			type: "get",
			data: null
		},
		"users-single": {
			url: "https://reqres.in/api/users/2",
			type: "get",
			data: null
		},
		"users-single-not-found": {
			url: "https://reqres.in/api/users/23",
			type: "get",
			data: null
		},
		"unknown": {
			url: "https://reqres.in/api/unknown",
			type: "get",
			data: null
		},
		"unknown-single": {
			url: "https://reqres.in/api/unknown/2",
			type: "get",
			data: null
		},
		"unknown-single-not-found": {
			url: "https://reqres.in/api/unknown/23",
			type: "get",
			data: null
		},
		"post": {
			url: "https://reqres.in/api/users",
			type: "post",
			data: {
				"name": "morpheus",
				"job": "leader"
			}
		},
		"put": {
			url: "https://reqres.in/api/users/2",
			type: "put",
			data: {
				"name": "morpheus",
				"job": "zion resident"
			}
		},
		"patch": {
			url: "https://reqres.in/api/users/2",
			type: "patch",
			data: {
				"name": "morpheus",
				"job": "zion resident"
			}
		},
		"delete": {
			url: "https://reqres.in/api/users/2",
			type: "delete",
			data: null
		},
		"register-successful": {
			url: "https://reqres.in/api/register",
			type: "post",
			data: {
				"email": "sydney@fife",
				"password": "pistol"
			}
		},
		"register-unsuccessful": {
			url: "https://reqres.in/api/register",
			type: "post",
			data: {
				"email": "sydney@fife"
			}
		},
		"login-successful": {
			url: "https://reqres.in/api/login",
			type: "post",
			data: {
				"email": "peter@klaven",
				"password": "cityslicka"
			}
		},
		"login-unsuccessful": {
			url: "https://reqres.in/api/login",
			type: "post",
			data: {
				"email": "peter@klaven"
			}
		},
		"delay": {
			url: "https://reqres.in/api/users?delay=3",
			type: "get",
			data: null
		},
	};



function AddList(ob)
{
	var inline='';
	//var len=Object.keys(ob).length;
	Object.keys(ob).forEach(function (item, key) 
		{
		console.log(key,"-----",ob[item]);
		inline +='<li data-id="'+item+'" data-key="endpoint" data-http="'+ob[item].type+'" class="" >'+key+"-"+item+'</li>';
		});
	console.log(inline);
	 document.getElementById("requestUnOrderedList").innerHTML = inline; 
// #requestList
}


function loadApplication(config) {
	

	var consoleEl = document.querySelector("#console"),
		endpointsEl = consoleEl.querySelector("[data-key='endpoints']"),
		endpointEls = endpointsEl.querySelectorAll("[data-key='endpoint']"),
		urlEl = consoleEl.querySelector("[data-key='url']"),
		responseCodeEl = consoleEl.querySelector("[data-key='response-code']"),
		sendRequestButton = consoleEl.querySelector("[data-key='send-request']"),
		
		
		
		outputRequestEl = consoleEl.querySelector("[data-key='output-request']"),
		
		
		outputResponseEl = consoleEl.querySelector("[data-key='output-response']"),
		
		
		spinnerEl = consoleEl.querySelector("[data-key='spinner']");

	[].forEach.call(endpointEls, function(el) {
		
		
		el.addEventListener("click", function(e) {
			var element = e.currentTarget,
				key = element.getAttribute("data-id"),
				settings = config[key],
				xhr = new XMLHttpRequest();

			for (var i = endpointEls.length - 1; i >= 0; i--) {
				var ep = endpointEls[i];
				ep.classList.remove("active");
			};

			element.classList.add("active");
			outputRequestEl.setAttribute("hidden", true);
			if (settings.data) {
				outputRequestEl.innerHTML = syntaxHighlight(JSON.stringify(settings.data, undefined, 4));
				outputRequestEl.removeAttribute("hidden");
			}

			var finalURL = /*"https://reqres.in/api/" +*/baseURL+ settings.url;
			urlEl.innerHTML = finalURL;

			outputResponseEl.innerHTML = "";
			outputResponseEl.setAttribute("hidden", true);
			spinnerEl.removeAttribute("hidden");

			xhr.open(settings.type.toUpperCase(), finalURL, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onload = function() {
				responseCodeEl.innerHTML = xhr.status;
				responseCodeEl.classList.remove("bad");
				if (xhr.status !== 200 && xhr.status !== 201) {
					responseCodeEl.classList.add("bad");
				}
				if (xhr.responseText) {
					outputResponseEl.innerHTML = syntaxHighlight(JSON.stringify(JSON.parse(xhr.responseText), undefined, 4));
				}
				spinnerEl.setAttribute("hidden", true);
				outputResponseEl.removeAttribute("hidden");
			};
			xhr.send((settings.data) ? JSON.stringify(settings.data) : null);
		});
		
		
	});

	endpointEls[0].click();

	function syntaxHighlight(json) {
		json = json.replace(/&/g, '&').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
			var cls = 'number';
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					cls = 'key';
				} else {
					cls = 'string';
				}
			} else if (/true|false/.test(match)) {
				cls = 'boolean';
			} else if (/null/.test(match)) {
				cls = 'null';
			}
			return '<span class="' + cls + '">' + match + '</span>';
		});
	}

}
var baseURL='';
AddList(config1);
loadApplication(config1);