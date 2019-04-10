
		function startArchive_v2p2()
			{
				var playerobj={};
		
			var dataobject= {
					  "channelid": String(LiveStreamObject.camera.id),
					  "resolutionwidth":String(LiveStreamObject.camera.quality.w),
					  "resolutionheight": String(LiveStreamObject.camera.quality.h),
					  "withaudio": false,
					"userid":LiveStreamObject.connect.server.stream.username, 
					"password":LiveStreamObject.connect.server.stream.password,
					"starttimestamp":String(LiveStreamObject.camera.starttimestamp)
					};
	
	
			var urlvalue = urlcreator_v2p2(0);
			var requestBody  =JSON.stringify({
			    "url":urlvalue,//LiveStreamObject.camera.videonetics.startLive,
			    "serverId":LiveStreamObject.connect.server.stream.serverId,
			    "body": dataobject
			  });
			
			console.log("requestBody::startArchive_v2p2:::",requestBody);
			$.ajax({
				type: "POST",
			    url: "/TrinityLiveStream/api/videonetcs/unified/startArchive",
				data: requestBody,
				contentType: 'application/json',
			//	xhrFields: { withCredentials: true },
				success: function(output, textStatus, jqXHR) {
					var data = output.data;
					 //4000
					 if(output.mstatus==false)
						{
					        console.log("Videonetics No response, Please check configuration ");
					        rewriteScreenContent("No response, Check Configuration");						 
						}
					 else if (output.statusCode && output.statusCode == 502) {
				        console.log("Videonetics No response");
				        rewriteScreenContent("No response");
				      }
					else if (data.statusCode && data.statusCode == 500) {
					        console.log("Videonetics Internal Server Issue");
					        rewriteScreenContent("Videonetics Internal Server Issue");
					      } 
					
					  else if (data.statusCode &&  data.statusCode == 400) {
					        console.log("Bad Request");
					        rewriteScreenContent("No Livestream available");
					      } 
					 
					 
					 
					  else if(data.code== 3022)
					 {
					 console.log("Playback not available");
					 //rewriteScreenContent("Camera Not available ");
					 }
					 else if(data.code== 3554)
					 {
					 console.log("Camera is offline");
					 console.log(" Videonetics Message: "+data.message);

					 rewriteScreenContent("No Data");
					 }
				 else
					 {
					 
					 	//disableLoadingTab("vid");
					 	rewriteScreenContent("loading player..");
					 	 disableEnableDiv(null,"mode-playback");
					 	 disableEnableDiv(null,"mode-download-image");
					 	// disableEnableDiv(null,"mode-download-screenshot");
						console.log("SUCCC :",data.result[0]["hlsurl"]);
						LiveStreamObject.camera.videonetics.sessionId = data.result[0]["sessionid"];
						LiveStreamObject.camera.videonetics.hlsURL =urlcreator_v2p2(3)+data.result[0]["hlsurl"];
						console.log("SESSIONID : ",LiveStreamObject.camera.videonetics.sessionId );
						
						//startLiveActions();
						//predefinedptzController()
						cameraOnloadFunction();
//						KeepLiveController();
						 }
				},
				error: function(xhr,status,error) {
					//console.log(xhr,status,error);
					//$("#postresponse").text(JSON.stringify(xhr));
					console.log("PROBABILIY CAMERA NOT AVAILABLE",status );
				//	if(status ==400 || status == "error")
				//	 //rewriteScreenContent("CAMERA NOT AVAILABLE");
				//	else
					 //rewriteScreenContent("ERROR IN CONNECTION");
					console.log("Status Code : ",status );
					console.log(JSON.stringify("EROOR", xhr.responseJSON ) );
					//$("#postresponse").text("Failed to make POST call");
				},
				crossDomain: true
			});
			
			
			
			}

		function downloadAction(path)
		{	
		console.log("downloading video url path ->",path);
			//var hardcodedvideo="http://192.168.1.190:85/Uploadfiles/videoplayback.mp4";
			//console.log("downloading video url ->",hardcodedvideo);
			$("body").mLoading({ text:"Downloading..." });
			setTimeout(function(){ 
				$("body").mLoading('hide');
				window.open(path,"_blank");
			}, 10000);

		}
			
			
		function getVideoClip()
		{
			var playerobj={};
	var totime= parseInt(LiveStreamObject.camera.starttimestamp)+300000;
		var dataobject= {
				  "channelid": String(LiveStreamObject.camera.id),
				  "resolutionwidth":String(LiveStreamObject.camera.quality.w),
				  "resolutionheight": String(LiveStreamObject.camera.quality.h),
				  "withaudio": false,
				"userid":LiveStreamObject.connect.server.stream.username, 
				"password":LiveStreamObject.connect.server.stream.password,
				"from":String(LiveStreamObject.camera.starttimestamp),
				"to":String(totime)
				};
/*
 * 
 {"url":"http://192.168.1.173:7080/REST/","serverId":5,"body":{"channelid":"2","from":"1547806350000","to":"1547806358000","userid":"joel","password":"joel"}}

 */

		var urlvalue = urlcreator_v2p2(0);
		var requestBody  =JSON.stringify({
		    "url":urlvalue,//LiveStreamObject.camera.videonetics.startLive,
		    "serverId":LiveStreamObject.connect.server.stream.serverId,
		    "body": dataobject
		  });
		
		console.log("requestBody::startArchive_v2p2:::",requestBody);
		$.ajax({
			type: "POST",
		    url: "/TrinityLiveStream/api/videonetcs/unified/getVideo",
			data: requestBody,
			contentType: 'application/json',
		//	xhrFields: { withCredentials: true },
			success: function(output, textStatus, jqXHR) {
				console.log(output);
				var data = output.data;
				 //4000
				 if(output.mstatus==false)
					{
				        console.log("Videonetics No response, Please check configuration ");
				        //rewriteScreenContent("No response, Check Configuration");						 
					}
				 else if (output.statusCode && output.statusCode == 502) {
			        console.log("Videonetics No response");
			        //rewriteScreenContent("No response");
			      }
				else if (data.statusCode && data.statusCode == 500) {
				        console.log("Videonetics Internal Server Issue");
				        //rewriteScreenContent("Videonetics Internal Server Issue");
				      } 
				
				  else if (data.statusCode &&  data.statusCode == 400) {
				        console.log("Bad Request");
				        //rewriteScreenContent("No Livestream available");
				      } 
				 
				 
				 
				  else if(data.code== 3022)
				 {
				 console.log("Camera Not available ");
				 //rewriteScreenContent("Camera Not available ");
				 }
				 else if(data.code== 3554)
				 {
				 console.log("Camera is offline");
				 console.log(" Videonetics Message: "+data.message);

				 //rewriteScreenContent("No Data");
				 }
			 else
				 {
				 
				 downloadAction(data.path);
				 }
			},
			error: function(xhr,status,error) {
				//console.log(xhr,status,error);
				//$("#postresponse").text(JSON.stringify(xhr));
				console.log("PROBABILIY CAMERA NOT AVAILABLE",status );
			//	if(status ==400 || status == "error")
			//	 //rewriteScreenContent("CAMERA NOT AVAILABLE");
			//	else
				 //rewriteScreenContent("ERROR IN CONNECTION");
				console.log("Status Code : ",status );
				console.log(JSON.stringify("EROOR", xhr.responseJSON ) );
				//$("#postresponse").text("Failed to make POST call");
			},
			crossDomain: true
		});
		
		
		
		}

		
		
			

		var disableEnableDiv = function (disablediv,enaablediv)
		{

			if(disablediv != null)document.getElementById("loading").style.display = "none"; 
			if(enaablediv != null)document.getElementById(enaablediv).style.display='block';
		}

			
			
		
