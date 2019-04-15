/*window.addEventListener("load", function() {
	FastClick.attach(document.body);
}, false);*/

function CallRequestOnClick(element,settings)
{
	


	var xhr = new XMLHttpRequest();

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
xhr.setRequestHeader("Content-Type", settings.returnType); //"application/json");
xhr.onload = function() {
	responseCodeEl.innerHTML = xhr.status;
	responseCodeEl.classList.remove("bad");
	if (xhr.status !== 200 && xhr.status !== 201) {
		responseCodeEl.classList.add("bad");
	}
	
	
	if(settings.returnType=="application/json")
		{
			if (xhr.responseText) {
				outputResponseEl.innerHTML = syntaxHighlight(JSON.stringify(JSON.parse(xhr.responseText), undefined, 4));
			}
		}
	else
		{
		alert("xhr.responseText -> "+xhr.responseText);
		outputResponseEl.innerHTML = syntaxHighlight(xhr.responseText);
		}
	
	
	spinnerEl.setAttribute("hidden", true);
	outputResponseEl.removeAttribute("hidden");
};





if(settings.returnType=="application/json")
{
	xhr.send((settings.data) && (typeof settings.data ===  'string')  ? (settings.data) : null);
}
else
{
console.log("settings.data ->",settings.data);
xhr.send((settings.data) ? (settings.data)  : null);
}



	
}




var consoleEl,endpointsEl,endpointEls,urlEl,odeEl,sendRequestButton,outputRequestEl ,	outputResponseEl ,spinnerEl ;
function AddList(ob)
{
	var inline='';
	//var len=Object.keys(ob).length;
	Object.keys(ob).forEach(function (keyvalue, indx) 
		{
		console.log(indx,"-------",keyvalue,"-----",ob[keyvalue]);
		inline +='<li data-id="'+keyvalue+'" data-key="endpoint" data-http="'+ob[keyvalue].type+'" class="" >'+indx+"-"+keyvalue+'</li>';
		});
	console.log(inline);
	 document.getElementById("requestUnOrderedList").innerHTML = inline; 
// #requestList
}













































function loadApplication(config) {
	

	 consoleEl = document.querySelector("#console");
		endpointsEl = consoleEl.querySelector("[data-key='endpoints']");
		endpointEls = endpointsEl.querySelectorAll("[data-key='endpoint']");
		urlEl = consoleEl.querySelector("[data-key='url']"),
		responseCodeEl = consoleEl.querySelector("[data-key='response-code']");
		sendRequestButton = consoleEl.querySelector("[data-key='send-request']");
		outputRequestEl = consoleEl.querySelector("[data-key='output-request']");	
		outputResponseEl = consoleEl.querySelector("[data-key='output-response']");
		spinnerEl = consoleEl.querySelector("[data-key='spinner']");

	[].forEach.call(endpointEls, function(el) {
		
		
		el.addEventListener("click", function(e) {
			var element = e.currentTarget;
			
			
			
			var key = element.getAttribute("data-id");
			console.log("key ->",key);
			settings = config[key];// replace with new object
			
			
			
			 CallRequestOnClick(element,settings);
			
			
			
			
			
		});
		
		
	});

	endpointEls[0].click();



}

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



function IsValidJSONString(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
        return false;
    }
    return false;
}

function configLoad(id)
{
	let jsonStr= document.getElementById(id).value;
	return IsValidJSONString(jsonStr);//JSON.parse(jsonStr);
}

function beutifyer(id)
{
	console.log("ID---",id);
	let jsonStr= document.getElementById(id).value;
	document.getElementById(id).value= 
										JSON.stringify(
												JSON.parse(
														jsonStr
															),undefined, 2
														);
	
}

function ConfigJsonAction()
{
	let configJson =configLoad("textarea.config.json");
	if (configJson===false)
		{
		alert("JSON not valid");
		}
	else
		{
		//console.log("JSON valid---",configJson);
		 beutifyer("textarea.config.json");
		AddList(configJson);
		loadApplication(configJson);
		}
		
}
var baseURL='';
//configLoad();
document.getElementById("textarea.config.json").value= JSON.stringify(config1,undefined, 2);
ConfigJsonAction();
//AddList(config1);
//loadApplication(config1);