function toggleTab(a)
{
	alert(a);
}











/**
Up, Down, Left, Right, UpLeft, UpRight, DownLeft, DownRight, ZoomIn, ZoomOut, Home.

 */
var ptzaction_v2p2 = function(actn,cam) {
//	alert(actn);
	ptzRequest_v2p2(actn,cam);
	 setTimeout(function(){ 
			ptzRequest_v2p2(actn,cam);
	 }, 1000);
	 setTimeout(function(){ 
			ptzRequest_v2p2(actn,cam);
	 }, 500);
	

};




var ptzRequest_v2p2 = function(actn,cam) {
//	alert(actn);
	var dataobject= {
			 // "channelid": String(LiveStreamObject.camera.id),
			//  "resolutionwidth":String(LiveStreamObject.camera.quality.w),
			///  "resolutionheight": String(LiveStreamObject.camera.quality.h),
			//  "withaudio": false,
		//	"streamsessionid":LiveStreamObject.camera.videonetics.sessionId,
			
			  "channelid": LiveStreamObject.camera.id.toString() ,
			  "ptzAction": actn.toString() ,
			  "ptzspeed": LiveStreamObject.camera.ptzspeed.toString(),
			"userid":LiveStreamObject.connect.server.stream.username, 
			"password":LiveStreamObject.connect.server.stream.password
			};


	var urlvalue = urlcreator_v2p2(0);
	var requestBody  =JSON.stringify({
	    "url":urlvalue,//LiveStreamObject.camera.videonetics.startLive,
	    "serverId":LiveStreamObject.connect.server.stream.serverId,
	    "body": dataobject
	  });
	
	console.log("requestBody::startalive_v2p2:::",requestBody);
	$.ajax({
		type: "POST",
	    url: "/TrinityLiveStream/api/videonetcs/unified/ptzAction",
		data: requestBody,
		contentType: 'application/json',
		/*			}).done(function(data, textStatus, ajax) {
						console.log("ptzaction -action :"+actn+" on -cam"+LiveStreamObject.camera.id);
					
					}).fail(function(jqXHR, textStatus, a, b, c) {
					
						console.log("ERORR ON REQUEST:",jqXHR, textStatus, a, b, c);
					});*/
		success: function(output, textStatus, jqXHR){
			var data = output.data;
				console.log("Success",data, textStatus, jqXHR);
				//alert("Sucess--");
			if(data.status && data.code && data.status == 200  && data.code == 2000)
				{
				console.log(new Date(),": PTZ Action Sucess");
				}
			else
				{
				console.log(new Date(),": FAILED - LIVE EXTENDED : ",data.description);
				console.log("PARTNER STATUS CODE : ",data.code,"PARTNER STATUS status : ",data.status);
				//startalive_v2p2();
				}
			// IF FAILED  AS PER THE STATUS CODE WE WANT TO CALL STARTLIVE
	            },
	            error: function(jqXHR, textStatus) {
	            	console.log("Error----",jqXHR,textStatus);
	        		LiveStreamObject.error.log.push([new Date()," : Error @ PTZ ::","jqXHR:",jqXHR,"textStatus" ,textStatus,"URL:",LiveStreamObject.camera.videonetics.keepLive, "AAA:","","BBB:", "","CCC", ""]);

	            },
	            crossDomain: true
	        });

};