function getVideoClip_v2p1() {
	var playerobj = {};
	var totime = parseInt(LiveStreamObject.camera.starttimestamp) + 300000;
	var dataobject = {
		"channelid" : String(LiveStreamObject.camera.id),
		"resolutionwidth" : String(LiveStreamObject.camera.quality.w),
		"resolutionheight" : String(LiveStreamObject.camera.quality.h),
		"withaudio" : false,
		"userid" : LiveStreamObject.connect.server.stream.username,
		"password" : LiveStreamObject.connect.server.stream.password,
		"from" : String(LiveStreamObject.camera.starttimestamp),
		"to" : String(totime)
	};
	/*
	 * 
	 * {"url":"http://192.168.1.173:7080/REST/","serverId":5,"body":{"channelid":"2","from":"1547806350000","to":"1547806358000","userid":"joel","password":"joel"}}
	 * 
	 */

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
				url : "/TrinityLiveStream/api/videonetcs/unified/getVideo",
				data : requestBody,
				contentType : 'application/json',
				// xhrFields: { withCredentials: true },
				success : function(output, textStatus, jqXHR) {
					console.log(output);
					var data = output.data;
					// 4000
					if (output.mstatus == false) {
						console
								.log("Videonetics No response, Please check configuration ");
						// rewriteScreenContent("No response, Check
						// Configuration");
					} else if (output.statusCode && output.statusCode == 502) {
						console.log("Videonetics No response");
						// rewriteScreenContent("No response");
					} else if (data.statusCode && data.statusCode == 500) {
						console.log("Videonetics Internal Server Issue");
						// rewriteScreenContent("Videonetics Internal Server
						// Issue");
					}

					else if (data.statusCode && data.statusCode == 400) {
						console.log("Bad Request");
						// rewriteScreenContent("No Livestream available");
					}

					else if (data.code == 3022) {
						console.log("Camera Not available ");
						// rewriteScreenContent("Camera Not available ");
					} else if (data.code == 3554) {
						console.log("Camera is offline");
						console.log(" Videonetics Message: " + data.message);

						// rewriteScreenContent("No Data");
					} else {

						downloadAction(data.path);
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
