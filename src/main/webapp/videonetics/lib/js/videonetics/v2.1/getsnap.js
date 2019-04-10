function downloadsnapAction(data) {
	var hardcodedvideo = "";
	console.log("data inside------------", data);
	// imgElem.setAttribute('src', "data:image/jpg;base64," + data);
	var win = window
			.open(
					"",
					"Title",
					"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=525,height=525,top="
							+ (screen.height - 400)
							+ ",left="
							+ (screen.width - 840));
	win.document.body.innerHTML = "<a href='data:image/png;base64," + data
			+ "' download='Camera_Incident_Screenshot'>"
			+ "<img src='data:image/png;base64," + data
			+ "' alt='Camera'  style='width:500px;height:500px;' /><a>";
}

function snapRequest() {
	var playerobj = {};

	var dataobject = {
		"channelid" : String(LiveStreamObject.camera.id),
		"userid" : LiveStreamObject.connect.server.stream.username,
		"password" : LiveStreamObject.connect.server.stream.password
	};

	var urlvalue = urlcreator_v2p1(0);
	var requestBody = JSON.stringify({
		"url" : urlvalue, // LiveStreamObject.camera.videonetics.startLive,
		"serverId" : LiveStreamObject.connect.server.stream.serverId,
		"body" : dataobject
	});

	console.log("requestBody::startArchive_v2p1:::", requestBody);
	$
			.ajax({
				type : "POST",
				url : "/TrinityLiveStream/api/videonetcs/unified/getCookie",
				data : requestBody,
				contentType : 'application/json',
				// xhrFields: { withCredentials: true },
				success : function(output, textStatus, jqXHR) {
					var data = output.data;
					console.log("data------------", data);
					var win = window.open("http://" + ESBpublicURL
							+ "/CameraCookieIntegration/" + output.data + "/"
							+ LiveStreamObject.connect.server.stream.serverId
							+ "/" + LiveStreamObject.camera.id, "Image");
					// 4000
					if (output.mstatus == false) {
						console
								.log("Videonetics No response, Please check configuration ");
						rewriteScreenContent("No response, Check Configuration");
					} else if (output.statusCode && output.statusCode == 502) {
						console.log("Videonetics No response");
						rewriteScreenContent("No response");
					} else if (data.statusCode && data.statusCode == 500) {
						console.log("Videonetics Internal Server Issue");
						rewriteScreenContent("Videonetics Internal Server Issue");
					}

					else if (data.statusCode && data.statusCode == 400) {
						console.log("Bad Request");
						rewriteScreenContent("No Livestream available");
					}

					else if (data.code == 3022) {
						console.log("Camera Not available ");
						rewriteScreenContent("Camera Not available ");
					} else if (data.code == 3554) {
						console.log("Camera is offline");
						console.log(" Videonetics Message: " + data.message);

						rewriteScreenContent("No Data");
					} else {

						//
					}
				},
				error : function(xhr, status, error) {
					// console.log(xhr,status,error);
					// $("#postresponse").text(JSON.stringify(xhr));
					console.log("PROBABILIY CAMERA NOT AVAILABLE", status);
					// if(status ==400 || status == "error")
					// rewriteScreenContent("CAMERA NOT AVAILABLE");
					// else
					rewriteScreenContent("ERROR IN CONNECTION");
					console.log("Status Code : ", status);
					console.log(JSON.stringify("EROOR", xhr.responseJSON));
					// $("#postresponse").text("Failed to make POST call");
				},
				crossDomain : true
			});

}
