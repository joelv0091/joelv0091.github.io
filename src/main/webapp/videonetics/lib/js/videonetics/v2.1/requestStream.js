/**
 * Called when the user clicks on the Play a random camera link. Sends a
 * RequestStream command to the Mobile Server and begins to request and parse
 * frames over the video channel.
 * 
 * @param cameraId:
 *            optional, if provided, requests stream for the specified camera.
 *            Otherwise plays a random one.
 */
var requestStream = function(cameraId, img) {

	if (cameraId != undefined) {
		$
				.ajax({
					type : "GET",
					// url: login.serverURL + "REST/" + login.serverid +
					// "/channel",
					url : login.serverURL + "/REST/" + login.serverid
							+ "/encoded/startlive/" + cameraId + "/200/100/0",
					contentType : 'application/json',
					// xhrFields: { withCredentials: true },

					success : function(response) {

						requestStream.videoResponse = response.result[0];
						var camDataObj = {
							"camId" : cameraId,
							"camData" : requestStream.videoResponse
						};

						requestAllStreams.cameraData.push(camDataObj);
						requestFrames(cameraId, img,
								requestStream.videoResponse.hlsurl);

					},
					error : function(textStatus, errorThrown) {
						// alert(textStatus.responseJSON.message);

					}

				});
	}

};
