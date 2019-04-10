function startArchive_v2p1() {
	var playerobj = {};

	var dataobject = {
		"channelid" : String(LiveStreamObject.camera.id),
		"resolutionwidth" : String(LiveStreamObject.camera.quality.w),
		"resolutionheight" : String(LiveStreamObject.camera.quality.h),
		"withaudio" : false,
		"userid" : LiveStreamObject.connect.server.stream.username,
		"password" : LiveStreamObject.connect.server.stream.password,
		"starttimestamp" : String(LiveStreamObject.camera.starttimestamp)
	};

	var urlvalue = urlcreator_v2p1(0);
	var requestBody = JSON.stringify({
		"url" : urlvalue,// LiveStreamObject.camera.videonetics.startLive,
		"serverId" : LiveStreamObject.connect.server.stream.serverId,
		"body" : dataobject
	});

	console.log("requestBody::startArchive_v2p1:::", requestBody);
	$
			.ajax({
				type : "POST",
				url : "/TrinityLiveStream/api/videonetcs/unified/startArchive",
				data : requestBody,
				contentType : 'application/json',
				// xhrFields: { withCredentials: true },
				success : function(output, textStatus, jqXHR) {
					var data = output.data;
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
						console.log("Playback not available");
						// rewriteScreenContent("Camera Not available ");
					} else if (data.code == 3554) {
						console.log("Camera is offline");
						console.log(" Videonetics Message: " + data.message);

						rewriteScreenContent("No Data");
					} else {

						// disableLoadingTab("vid");
						rewriteScreenContent("loading player..");
						disableEnableDiv("loading", "mode-playback");
						disableEnableDiv("loading", "mode-download-image");
						// disableEnableDiv("loading","mode-download-screenshot");
						console.log("SUCCC :", data.result[0]["hlsurl"]);
						LiveStreamObject.camera.videonetics.sessionId = data.result[0]["sessionid"];
						LiveStreamObject.camera.videonetics.hlsURL = urlcreator_v2p1(3)
								+ data.result[0]["hlsurl"];
						console.log("SESSIONID : ",
								LiveStreamObject.camera.videonetics.sessionId);

						// startLiveActions();
						// predefinedptzController()
						hlsPlayerActions();
						ptzActions();
						// KeepLiveController();
					}
				},
				error : function(xhr, status, error) {
					// console.log(xhr,status,error);
					// $("#postresponse").text(JSON.stringify(xhr));
					console.log("PROBABILIY CAMERA NOT AVAILABLE", status);
					// if(status ==400 || status == "error")
					// //rewriteScreenContent("CAMERA NOT AVAILABLE");
					// else
					// rewriteScreenContent("ERROR IN CONNECTION");
					console.log("Status Code : ", status);
					console.log(JSON.stringify("EROOR", xhr.responseJSON));
					// $("#postresponse").text("Failed to make POST call");
				},
				crossDomain : true
			});

}
