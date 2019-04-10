/**
 * 
 */



 
			function startalive_v1p5()
			{
				var playerobj={};
			var ajaxip= JSON.stringify({"loginid": LiveStreamObject.connect.login.parent.username, "jsessionid":LiveStreamObject.camera.sid,"channelid": LiveStreamObject.camera.id, "resolutionwidth":LiveStreamObject.camera.quality.w , "resolutionheight":LiveStreamObject.camera.quality.h , "withaudio": 0});
			console.log("ajaxip:::::",ajaxip);

					$.ajax({
						method: "POST",
						url:LiveStreamObject.camera.videonetics.startLive,
						  contentType: 'application/json',
						  data : ajaxip,
						  success: function(data, textStatus, jqXHR){
							  
								console.log("SUCCC :",data.result[0]["hlsURL"]);
								LiveStreamObject.camera.videonetics.sessionId = data.result[0]["sesssionId"];
								
								LiveStreamObject.camera.videonetics.hlsURL =urlcreator_v1p5(3)+data.result[0]["hlsURL"];
								console.log("SESSIONID : ",LiveStreamObject.camera.videonetics.sessionId );
								
								//startLiveActions();
								cameraOnloadFunction();
			                },
			                error: function(jqXHR, textStatus) {
			                    console.log(JSON.stringify("EROOR", jqXHR.responseJSON ) );

			                }
			            });
			}



			
			
			/*
			 *   // start
			 
			function startalive_v1p5()
			{
				var playerobj={};
			var ajaxip= JSON.stringify({"loginid": "hpe", "jsessionid":LiveStreamObject.camera.sid,"channelid": "1", "resolutionwidth": "1024", "resolutionheight": "720", "withaudio": 0});
			console.log("ajaxip:::::",ajaxip);

					$.ajax({
						method: "POST",
						url:LiveStreamObject.camera.videonetics.startLive,
						   contentType: 'application/json',
				    //       async:true,

					//	contentType: "application/json",
		    		//	dataType: "json",
				       // dataType : 'jsonp',   //you may use jsonp for cross origin request // ABORTED
				        ///crossDomain:true,
				        //data :JSON.stringify({"loginid": "hpe", "jsessionid":"f33f3ff2046165f5768622fe4e97d013","channelid": "1", "resolutionwidth": "1024", "resolutionheight": "720", "withaudio": 0}),
						data :{"loginid": "hpe", "jsessionid":LiveStreamObject.camera.sid,"channelid": "1", "resolutionwidth": "1024", "resolutionheight": "720", "withaudio": 0},
					}).done(function(data, textStatus, ajax) {
						console.log("SUCCC:",data.result[0]["hlsURL"]);
						LiveStreamObject.camera.videonetics.sessionId = data.result[0]["sesssionId"];
						LiveStreamObject.camera.videonetics.hlsURL =urlcreator_v1p5(3)+data.result[0]["hlsURL"];
						console.log(LiveStreamObject.camera.videonetics.hlsURL);
						
						//startLiveActions();
						cameraOnloadFunction();
						
					
					}).fail(function(jqXHR, textStatus, a, b, c) {
					
						console.log("ERORR ON REQUEST:",jqXHR, textStatus, a, b, c);
					});

			}

			 */
