/**
 * 
 */



 
			function startalive_v1p8()
			{
				var playerobj={};
			var ajaxip= {"loginid": LiveStreamObject.connect.server.stream.username, "pass":LiveStreamObject.connect.server.stream.password,"jsessionid":LiveStreamObject.camera.sid,"channelid": LiveStreamObject.camera.id, "resolutionwidth":LiveStreamObject.camera.quality.w , "resolutionheight":LiveStreamObject.camera.quality.h , "withaudio": 0};
		//	console.log("ajaxip:::::",ajaxip);
			var body=JSON.stringify({"url": "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/"+LiveStreamObject.connect.server.stream.project,"body":ajaxip});
			console.log("body::startalive_v1p8:::",body);
					$.ajax({
						method: "POST",
						url:"/TrinityLiveStream/api/streamController/startLive",
						  contentType: 'application/json',
						  data : body,
						  success: function(data, textStatus, jqXHR){
							  if(data.statusCode == 500)
								 {
								 console.log("Videonetics Internal Server Issue");
								 rewriteScreenContent("Videonetics Internal Server Issue");
								 }
							  else if(data.statusCode == 400)
								 {
								 console.log("Bad Request");
								 rewriteScreenContent("No Livestream available");
								 }
							  else if(data.data)
								  {
								  disableLoadingTab("vid");
								  console.log("SUCCC :",data.data.result[0]["hlsURL"]);
									LiveStreamObject.camera.videonetics.sessionId = data.data.result[0]["sesssionId"];
									
									LiveStreamObject.camera.videonetics.hlsURL =urlcreator_v1p8(3)+data.data.result[0]["hlsURL"];
									console.log("SESSIONID : ",LiveStreamObject.camera.videonetics.sessionId );
									
									//startLiveActions();
									cameraOnloadFunction();
								  }
							  else if(data.code== 3022)
								 {
								 console.log("Camera Not available ");
								 rewriteScreenContent("400: Camera Not available ");
								 }
							
							  
							  else
								  {
								  rewriteScreenContent(data.statusCode+": "+data.message);
								  }
								
			                },
			                error: function(jqXHR, textStatus) {
			                    console.log(JSON.stringify("EROOR", jqXHR.responseJSON ) );

			                }
			            });
			}



			
		
