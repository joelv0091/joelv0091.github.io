/**
 * 
 */
			function startalive_v2p1()
			{
				var playerobj={};
		//	var ajaxip= {"userid": LiveStreamObject.connect.login.parent.username, "password":LiveStreamObject.connect.login.parent.password,"jsessionid":LiveStreamObject.camera.sid,"channelid": LiveStreamObject.camera.id, "resolutionwidth":LiveStreamObject.camera.quality.w , "resolutionheight":LiveStreamObject.camera.quality.h , "withaudio": 0};
		//	var body=JSON.stringify({"url": "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/"+LiveStreamObject.connect.server.stream.project,"body":ajaxip});

			var testURL="http://apiservice.videonetics.com:7080/REST/1/startlve/"+LiveStreamObject.camera.id+"/"+LiveStreamObject.camera.quality.w+"/"+LiveStreamObject.camera.quality.h+"/false";
			var dataobject= {
					  "channelid": String(LiveStreamObject.camera.id),
					  "resolutionwidth":String(LiveStreamObject.camera.quality.w),
					  "resolutionheight": String(LiveStreamObject.camera.quality.h),
					  "withaudio": false
					};
			var payload=JSON.stringify(dataobject);
			
			console.log("body::startalive_v2p1:::",payload);
			
			$.ajax({
				type: "POST",
				url: LiveStreamObject.camera.videonetics.startLive, 
				data: payload,
				contentType: 'application/json',
				xhrFields: { withCredentials: true },
				success: function(data, textStatus, jqXHR) {
					 globaldata =data;
					 
					 if(data.code== 3022)
					 {
					 console.log("Camera Not available ");
					 rewriteScreenContent("Camera Not available ");
					 }
				 else
					 {
					 
					 disableLoadingTab("vid");
						console.log("SUCCC :",data.result[0]["hlsurl"]);
						LiveStreamObject.camera.videonetics.sessionId = data.result[0]["sessionid"];
						LiveStreamObject.camera.videonetics.hlsURL =urlcreator_v2p1(3)+data.result[0]["hlsurl"];
						console.log("SESSIONID : ",LiveStreamObject.camera.videonetics.sessionId );
						
						//startLiveActions();
						cameraOnloadFunction();
						 }
				},
				error: function(xhr,status,error) {
					//console.log(xhr,status,error);
					//$("#postresponse").text(JSON.stringify(xhr));
					console.log("PROBABILIY CAMERA NOT AVAILABLE",status );
					if(status ==400 || status == "error")
					 rewriteScreenContent("CAMERA NOT AVAILABLE");

					console.log("Status Code : ",status );
					console.log(JSON.stringify("EROOR", xhr.responseJSON ) );
					//$("#postresponse").text("Failed to make POST call");
				},
				crossDomain: true
			});
			
			
			
			}

			
			
			
			
			
			
			
			function test_startalive_v2p1()
			{
				var playerobj={};
		//	var ajaxip= {"userid": LiveStreamObject.connect.login.parent.username, "password":LiveStreamObject.connect.login.parent.password,"jsessionid":LiveStreamObject.camera.sid,"channelid": LiveStreamObject.camera.id, "resolutionwidth":LiveStreamObject.camera.quality.w , "resolutionheight":LiveStreamObject.camera.quality.h , "withaudio": 0};
		//	var body=JSON.stringify({"url": "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/"+LiveStreamObject.connect.server.stream.project,"body":ajaxip});

			var dataobject= {
					  "channelid": 1,
					  "resolutionwidth":320,
					  "resolutionheight": 240,
					  "withaudio": false
					};
			
			
			/*var dataobject= {
					  "channelid": LiveStreamObject.camera.id,
					  "resolutionwidth":LiveStreamObject.camera.quality.w,
					  "resolutionheight": LiveStreamObject.camera.quality.h,
					  "withaudio": false
					};*/
			var payload=JSON.stringify(dataobject);
			var cookie = LiveStreamObject.connect.login.parent.auth ;
			var headerdata =  {
				     //   'Authorization':'Basic xxxxxxxxxxxxx',
				       // 'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
				        'Content-Type':'application/json',
				    
				  //      'Access-Control-Allow-Origin': "*",
				  //      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
				     //       'Access-Control-Allow-Headers': 'Authentication',  //500
				       // 'Cookie':cookie
				    }; 
			//console.log("HEADSER----:::",headerdata);
			console.log("body::startalive_v2p1:::",payload);
					$.ajax({
						url:"https://192.168.1.173:7443/REST/1/startlive/1/320/240/0", 				
//						url:LiveStreamObject.camera.videonetics.startLive, 
						 contentType: 'application/json',
						//  dataType: 'json',
					     crossDomain: true,
						  //   cache: false,
					
						// headers: LiveStreamObject.connect.login.parent.auth,
						 // headers:headerdata,
							method: "GET",
						   // crossDomain: true,
						   //cache: false,
						  //Failed to load http://apiservice.videonetics.com:7080/REST/1/startlive: Request header field 44 is not allowed
						  //by Access-Control-Allow-Headers in preflight response.
						  
						  
						  // Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://apiservice.videonetics.com:7080/REST/1/startlive. (Reason: missing token ‘0’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel)
						  //ross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://apiservice.videonetics.com:7080/REST/1/startlive. (Reason: CORS request did not succeed).
						 
						 /*
						  beforeSend: function(request) {
							    request.setRequestHeader("Cookie", cookie);
							  },
							  */
							 
						//  data : payload,
				 xhrFields: {withCredentials:true},   //500
						  
						  //Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at ‘http://apiservice.videonetics.com:7080/REST/1/startlive’. (Reason: Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’).
						  
						  //Failed to load http://apiservice.videonetics.com:7080/REST/1/startlive: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header
						  //in the response must not be the wildcard '*' when the request's credentials mode is 'include'. Origin 'http://epsilon_prime:7979' is therefore not allowed access. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
						  success: function(data, textStatus, jqXHR){
							  
								console.log("SUCCC :",data.result[0]["hlsURL"]);
								LiveStreamObject.camera.videonetics.sessionId = data.result[0]["sesssionId"];
								LiveStreamObject.camera.videonetics.hlsURL =urlcreator_v2p1(3)+data.result[0]["hlsURL"];
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
			 * 
			 
			  
			  var token;    
$.ajax({
    url: "https://server.com/AuthService/api/account/login",
    crossDomain: true,
    xhrFields: {withCredentials: true},
    type: 'post',
    async: false,
    data: {
        username: "username",
        password: "password"
    }
}).done(function(response) {
    token = response.securityToken;
    success = true;
});


			 * 

			 */
		
