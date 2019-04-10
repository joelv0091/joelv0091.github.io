//var imageElement;  ///b64toBlob
var ActivateStreamImage_v2p1 = function() { // Initialising Function

	disableEnableDiv("loading", "mjpg");
	LiveStreamObject.camera.urlObject = window.URL || window.webkitURL;
	LiveStreamObject.camera.imageElement = document.getElementById('mjpg');	
	// setTimeout(function() {
	getStreamImage_v2p1();


if(LiveStreamObject.camera.timer.enable)
	{
	LiveStreamObject.camera.timer.object =
	setInterval(function() {
		console.log("setInterval of Camera "+LiveStreamObject.camera.id);
		XHRRequest();
	}, LiveStreamObject.camera.timer.interval);
	
	}
else
	{
	
	LiveStreamObject.camera.imageElement.onload = function () {
	//	console.log("imag-onload-false");   
		 //  new XHRRequest(videoId, displayImage, videoUrl, false);
		XHRRequest();  
		};
		
	}


	// }, 12);

}



var requestLogger={sendingTime:null,recievingTime:null};

function toDataURL(url, callbk, timeoutbool) {  // Calling Image
	var xhr = new XMLHttpRequest();
	var NewsendingTime=  new Date();
	 requestLogger.sendingTime =NewsendingTime;
	 xhr.onreadystatechange = function (response) {
			
		 var reader = new FileReader();
		 if (xhr.readyState == 4) {
			 if (xhr.status == 200) {
				var reader = new FileReader();
				 reader.onloadend = function() {
					 
					 if(NewsendingTime <  requestLogger.sendingTime )
						 {
						 console.log("Response of OLD Request ->  ",NewsendingTime, "Last  Request Time -> ",requestLogger.sendingTime );
						 console.log("---------Diff in ms->  ",(requestLogger.sendingTime  - NewsendingTime ), "  # RequestResponseTime in ms -> ",(new Date() - NewsendingTime) );
						 }
					 else
						 {
						 // Normal
//						 console.log("reader.onloadend : ",reader);
						 //console.log("++++++Diff in ms->  ",(  NewsendingTime -requestLogger.sendingTime ), "  # RequestResponseTime in ms -> ",(new Date() - NewsendingTime) );
						 callbk(reader);
						 requestLogger.recievingTime = new Date();
						 }
					 
				
				
			 }
			 reader.readAsDataURL(xhr.response);
				
			 } 
		  else if( ('responseText' in xhr)  && xhr.responseText != "") {
			  console.log("toDataURL ####### xhr.status -->  ",xhr.status);
			  console.log(xhr.responseText);
         }
			 else {
				 
				 //getStreamImage_v2p1();
				 console.log("toDataURL ####### xhr.status -->  ",xhr.status);
				
					 if(!LiveStreamObject.camera.timer.enable)console.log("Stream Will Stop now ",new Date);
					 
			

			  
				//doJquery = true;
			 }

		 }
		 else
		 {
			 //console.log("toDataURL ####### xhr.readyState -->  ",xhr.readyState);
			// console.log("toDataURL ####### xhr.readyState and responseText  -->  ",xhr.readyState,xhr.responseText);
		 }
		 
	 };

	 xhr.onerror = function(e) {
		// Enable Play Button
		 console.log("Error at Request ");
		// getStreamImage_v2p1();
		};
		
		xhr.ontimeout = function (e) {
			  // XMLHttpRequest timed out. Do something here.
			 console.log("ontimeout ");
			 TimeOutErrorHandler(e,xhr);
			};
		
	xhr.open('GET', url);
	xhr.responseType = 'blob';

	if(LiveStreamObject.camera.timer.xhrTimeOut && timeoutbool ==undefined )xhr.timeout = LiveStreamObject.camera.timer.xhrTimeOut; // time in milliseconds
	xhr.send();
}

function TimeOutErrorHandler(e,xhrElement)
{
	
	XHRRequest(false);
}

var XHRRequest = function (bool) // 
{
	//	toDataURL(login.serverURL + payload, function(response) {
	toDataURL(LiveStreamObject.camera.videonetics.ajaxURL+'?abc=xhr', function(response) {
				// //	console.log('RESULT', reader.result)
				var dataUrl = response.result;
				var res = dataUrl.split(",");
				var blobData = b64toBlob(res[1],'image/jpeg'); // new Blob(res[1], { type: 'image/jpeg' });
			//	console.log("XHRRequest : Sucessed", LiveStreamObject.camera.videonetics.ajaxURL);
				
				displayImage_v2p1(blobData);
			//	if(!LiveStreamObject.camera.timer.enable)XHRRequest();  // repeate if timer false
			},bool);
	
	
}




var getStreamImage_v2p1 = function() {// contextMenuRequest_v2p1

	// LiveStreamObject.camera.videonetics.sessionId =
	// data.result[0]["sessionid"];
	// LiveStreamObject.camera.videonetics.mjpg
	// =urlcreator_v2p1(3)+data.result[0]["hlsurl"];
	// requestFrames(cameraId, img, requestStream.videoResponse.hlsurl); //  "/encoded/stream/raw/session/{vsessionid}/channel/{channelid}"
	//requestFrames(cameraId, img, '/REST/'+ login.serverid +'/encoded/stream/raw/session/' + login.sessionid + '/channel/' + cameraId);

	//var urlvalue = LiveStreamObject.camera.videonetics.mjpgURL + "/session/"+ LiveStreamObject.camera.videonetics.jsessionid;
	 LiveStreamObject.camera.videonetics.ajaxURL =urlcreator_v2p1(8);
	 console.log("getStreamImage_v2p1 Calling URL : ", LiveStreamObject.camera.videonetics.ajaxURL);
	$.ajax({
		type : "GET",
		url :  LiveStreamObject.camera.videonetics.ajaxURL+'?abc=ajax',
		success : function(output, textStatus, jqXHR) {

			if (jqXHR.status == 200 ) {
				console.log("response AJAX: ", LiveStreamObject.camera.videonetics.ajaxURL);
				toDataURL(LiveStreamObject.camera.videonetics.ajaxURL+'?abc=responseAjax', function(response) {//Callback
					// //	console.log('RESULT', reader.result)
					LiveStreamObject.camera.videonetics.mjpgURL = response.result ;
					var dataUrl = response.result;
					var res = dataUrl.split(",");
					var blobData = b64toBlob(res[1],'image/jpeg'); // new Blob(res[1], { type: 'image/jpeg' });
					displayImage_v2p1(blobData);
				})
				
				
	/*			var snapData = output.result[0].snap;
				var byteArray = new Uint8Array(snapData);
				var blobData = new Blob([ byteArray ], {
					type : 'image/jpeg'
				});*/
				// displayImageController(blobData);
				//displayImage_v2p1(blobData);
		
					
			} else {
				disableEnableDiv("mjpg", "loading");
				if(LiveStreamObject.camera.timer.enable)clearInterval(LiveStreamObject.camera.timer.object);
				
				if (output.status == 401) {
					rewriteScreenContent("Unauthorised");
				} else if (output.status) {
					rewriteScreenContent("Ststus Code : " + output.status);
				}
			}

		},

		error: function (textStatus, errorThrown) {
			//console.log("Snap bytes Failed");
			console.log("textStatus",textStatus);
			console.log("textStatus.responseJSON",textStatus.responseJSON, errorThrown);
			
			if(textStatus.responseJSON != undefined && textStatus.responseJSON.code == 3556 ){
				if(!LiveStreamObject.camera.timer.enable)getStreamImage_v2p1();  // repeate
			}
			else if(errorThrown = 'timeout' ){
				console.log("timeout if");
				//if(!LiveStreamObject.camera.timer.enable)getStreamImage_v2p1();  // repeate
			}
			
			else
				{
			//	disableEnableDiv("mjpg", "loading");
			//	rewriteScreenContent("Status Code : " + errorThrown);
				//clearInterval(LiveStreamObject.camera.timer.object)
				}
			
			
		},

		crossDomain : true,
		timeout : (5*LiveStreamObject.camera.timer.xhrTimeOut)
	});

};