/**
 * 
 */
function encodedStartalive_v2p1() {
	var playerobj = {};

	var dataobject = {
		"channelid" : String(LiveStreamObject.camera.id),
		"resolutionwidth" : String(LiveStreamObject.camera.quality.w),
		"resolutionheight" : String(LiveStreamObject.camera.quality.h),
		"withaudio" : false,
		"userid" : LiveStreamObject.connect.server.stream.username,
		"password" : LiveStreamObject.connect.server.stream.password
	};

	var urlvalue = urlcreator_v2p1(0);
	var requestBody = JSON.stringify({
		"url" : urlvalue,// LiveStreamObject.camera.videonetics.startLive,
		"serverId" : LiveStreamObject.connect.server.stream.serverId,
		"body" : dataobject
	});

	console.log("requestBody::startalive_v2p1:::", requestBody);
	$
			.ajax({
				type : "POST",
				url : "/TrinityLiveStream/api/videonetcs/unified/encoded/startLive",
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
						console.log("No response from Videonetiocs");
						rewriteScreenContent("No response");
					} else if (output.statusCode && output.statusCode == 400) {
						console.log("400 camera id wrong---"
								+ LiveStreamObject.camera.id);
						rewriteScreenContent("Camera 400");
					} else if (output.statusCode && output.statusCode == 500) {
						console.log("Videonetics Internal Server Issue");
						rewriteScreenContent("Videonetics Internal Server Issue");
					}

					else if (output.statusCode && output.statusCode == 404) {
						console.log("Bad Request");
						rewriteScreenContent(data.message);
					}

					else if (data.code == 3022) {
						console.log("Camera Not available ");
						rewriteScreenContent("Camera Not available ");
					} else if (data.code == 3554) {

						console.log("Camera is offline");
						console.log(" Videonetics Message: " + data.message);
						rewriteScreenContent("Camera is offline");
					} else {

						// disableLoadingTab("vid");
						rewriteScreenContent("loading player..");

						if (LiveStreamObject.elements.view.enable.imagedownload)
							disableEnableDiv("loading",
									"mode-download-screenshot");
						if (data && data.result && data.result[0]) {

							// output.jsessionid
							LiveStreamObject.camera.videonetics.jsessionid = output.jsessionid;
							LiveStreamObject.camera.videonetics.sessionId = data.result[0]["sessionid"];
							console
									.log(
											"SESSIONID : ",
											LiveStreamObject.camera.videonetics.sessionId);

							var streamURL = data.result[0]["hlsurl"]
							console.log("streamURL :", streamURL);
							var re = /(?:\.([^.]+))?$/;
							var ext = re.exec(streamURL)[1];

							if (ext == "m3u8") {
								disableEnableDiv("loading", "mode-live");
								LiveStreamObject.camera.videonetics.hlsURL = urlcreator_v2p1(3)
										+ data.result[0]["hlsurl"];
								hlsPlayerActions();
							} else {

								LiveStreamObject.camera.videonetics.mjpgURL = urlcreator_v2p1(3)
										+ data.result[0]["hlsurl"];
								// requestFrames(cameraId, img, requestStream.videoResponse.hlsurl); //  "/encoded/stream/raw/session/{vsessionid}/channel/{channelid}"
								//requestFrames(cameraId, img, '/REST/'+ login.serverid +'/encoded/stream/raw/session/' + login.sessionid + '/channel/' + cameraId);
								
								ActivateStreamImageontroller();

							}

							//

							ptzActions();

						}

						// KeepLiveController();
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
