/**
 * 
 */

function intialiseKeepLive_v2p1() {
	console.trace(": intialiseKeepLive_v2p1");
	console.log(new Date(), ": intialiseKeepLive_v2p1");

	LiveStreamObject.timer.object = setInterval(function() {
		console.log(new Date(), ":call KeepLiveRequest_v2p1");
		KeepLiveRequest_v2p1();
	}, 10000 * LiveStreamObject.timer.interval);

}

function KeepLiveRequest_v2p1() {

	var dataobject = {
		// "channelid": String(LiveStreamObject.camera.id),
		// "resolutionwidth":String(LiveStreamObject.camera.quality.w),
		// / "resolutionheight": String(LiveStreamObject.camera.quality.h),
		// "withaudio": false,
		"streamsessionid" : LiveStreamObject.camera.videonetics.sessionId,
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
	$.ajax({
		type : "POST",
		url : "/TrinityLiveStream/api/videonetcs/unified/keepAlive",
		data : requestBody,
		contentType : 'application/json',

		success : function(output, textStatus, jqXHR) {
			var data = output.data;
			console.log("Success", data, textStatus, jqXHR);
			// alert("Sucess--");
			if (output.status && data.status == 200 && data.code == 2007) {
				console.log(new Date(), ": RESULT - LIVE EXTENDED");
			} else if (data) {
				console.log(new Date(), ": FAILED - LIVE EXTENDED : ",
						data.description);
				console.log("PARTNER STATUS CODE : ", data.status);
				clearInterval(LiveStreamObject.timer.object);
				console.log("CLEARED TIMERRRRRRRR : ",
						LiveStreamObject.timer.object);
				// startalive_v2p1();
			} else {
				console.log(new Date(), ": FAILED - LIVE EXTENDED : ",
						output.statusCode);
				console.log("PARTNER STATUS CODE : ", output.status);
				clearInterval(LiveStreamObject.timer.object);
				console.log("CLEARED TIMERRRRRRRR : ",
						LiveStreamObject.timer.object);
				// startalive_v2p1();
			}
			// IF FAILED AS PER THE STATUS CODE WE WANT TO CALL STARTLIVE
		},
		error : function(jqXHR, textStatus) {
			console.log("Error--@KeepAlive--", jqXHR, textStatus);

			// LiveStreamObject.error.log.push(new Date()+" : Error @
			// KeepLiveRequest ::"+ex.stack);
			LiveStreamObject.error.log.push([ new Date(),
					" : Error @ KeepLiveRequest ::", "jqXHR:", jqXHR,
					"textStatus", textStatus, "URL:",
					LiveStreamObject.camera.videonetics.keepLive, "AAA:", "",
					"BBB:", "", "CCC", "" ]);
			// console.log("ERORR ON REQUEST:","jqXHR:",jqXHR,"textStatus"
			// ,textStatus,"AAA:", a,"BBB:", b,"CCC", c);
			// console.trace("ERORR ON REQUEST:");

		},
		crossDomain : true
	});

}
