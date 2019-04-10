function predefinedptz_v2p1(input) {
	var playerobj = {};

	var dataobject = {
		"channelid" : String(LiveStreamObject.camera.id),
		"presetname" : String(input != undefined ? input
				: LiveStreamObject.camera.preset),
		"ptzspeed" : String(LiveStreamObject.camera.ptzspeed),
		"userid" : LiveStreamObject.connect.server.stream.username,
		"password" : LiveStreamObject.connect.server.stream.password
	};

	var urlvalue = urlcreator_v2p1(0);
	var requestBody = JSON.stringify({
		"url" : urlvalue, // LiveStreamObject.camera.videonetics.startLive,
		"serverId" : LiveStreamObject.connect.server.stream.serverId,
		"body" : dataobject
	});

	console.log("requestBody::predefinedptz_v2p1:::", requestBody);
	$.ajax({
		type : "POST",
		url : "/TrinityLiveStream/api/videonetcs/unified/ptzPresetAction",
		data : requestBody,
		contentType : 'application/json',
		success : function(output, textStatus, jqXHR) {
			var data = output.data;

			if (data.code == 3022) {
				console.log("Camera Not available ");
				// rewriteScreenContent("Camera Not available ");
			} else {

				console.log("SUCCC :", data);

			}
		},
		error : function(xhr, status, error) {
			// console.log(xhr,status,error);
			// $("#postresponse").text(JSON.stringify(xhr));
			console.log("PROBABILIY CAMERA NOT AVAILABLE", status);
			if (status == 400 || status == "error")
				rewriteScreenContent("CAMERA NOT AVAILABLE");

			console.log("Status Code : ", status);
			console.log(JSON.stringify("EROOR", xhr.responseJSON));
			// $("#postresponse").text("Failed to make POST call");
		},
		crossDomain : true
	});

}
