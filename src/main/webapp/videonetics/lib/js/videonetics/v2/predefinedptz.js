/**
 * 
 */
			function predefinedptz_v2p0(input)
			{
				var playerobj={};
		//	var ajaxip= {"userid": LiveStreamObject.connect.login.parent.username, "password":LiveStreamObject.connect.login.parent.password,"jsessionid":LiveStreamObject.camera.sid,"channelid": LiveStreamObject.camera.id, "resolutionwidth":LiveStreamObject.camera.quality.w , "resolutionheight":LiveStreamObject.camera.quality.h , "withaudio": 0};
		//	var body=JSON.stringify({"url": "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/"+LiveStreamObject.connect.server.stream.project,"body":ajaxip});
		
			LiveStreamObject.camera.videonetics.predefinedptz= urlcreator_v2p0(6);
			
		
			var dataobject= {
					  "channelid": String(LiveStreamObject.camera.id),
					  "presetname":String(input != undefined ? input:LiveStreamObject.camera.preset),
					  "ptzspeed": String(LiveStreamObject.camera.ptzspeed)
					};
			var payload=JSON.stringify(dataobject);
			
			console.log("body::predefinedptz_v2p0:::",payload);
			
			$.ajax({
				type: "POST",
				url: LiveStreamObject.camera.videonetics.predefinedptz, 
				data: payload,
				contentType: 'application/json',
				xhrFields: { withCredentials: true },
				success: function(data, textStatus, jqXHR) {
		
					 if(data.code== 3022)
					 {
					 console.log("Camera Not available ");
					 rewriteScreenContent("Camera Not available ");
					 }
				 else
					 {
					 
					
						console.log("SUCCC :",data);
					
						 }
				},
				error: function(xhr,status,error) {
					//console.log(xhr,status,error);
					//$("#postresponse").text(JSON.stringify(xhr));
					console.log("PROBABILIY CAMERA NOT AVAILABLE",status );
					if(status == 400 || status == "error")
					 rewriteScreenContent("CAMERA NOT AVAILABLE");

					console.log("Status Code : ",status );
					console.log(JSON.stringify("EROOR", xhr.responseJSON ) );
					//$("#postresponse").text("Failed to make POST call");
				},
				crossDomain: true
			});
			
			
			
			}

			
			var contextMenu_v2p0 = function(actn,cam) {
	// http://192.168.1.173:7080//REST/1/channel/2/getpresets
//				"http://192.168.1.173:7080/REST/1/channel/2/agetpresets"
				LiveStreamObject.camera.videonetics.getpresetlist =urlcreator_v2p0(7)+"/"+LiveStreamObject.camera.id+"/getpresets";
								$.ajax({
									method: "GET",
									url: LiveStreamObject.camera.videonetics.getpresetlist,
								   // headers: LiveStreamObject.connect.login.parent.auth,
										xhrFields: { withCredentials: true }

								}).done(function(data, textStatus, ajax) {
									console.log("ptzaction list "+data.result+" on -cam"+LiveStreamObject.camera.id);
									createContextMenu(data.result);
								}).fail(function(jqXHR, textStatus, a, b, c) {
								
									console.log("ERORR ON contextMenu_v2p0() REQUEST:",jqXHR, textStatus, a, b, c);
								});


			};
			
			