/**
 * 
 */


function intialiseKeepLive_v2p1()
{
	console.log(new Date(),": intialiseKeepLive_v2p1");

	 LiveStreamObject.timer.object= setInterval(function(){
		 KeepLiveRequest_v2p1();
 }, 60000 * LiveStreamObject.timer.interval);

}

function KeepLiveRequest_v2p1()
{
	LiveStreamObject.camera.videonetics.keepLive = urlcreator_v2p1(2);
	console.log("keepalive.js  started after 4minutes--KeepLiveRequest_v2p1",LiveStreamObject.camera.videonetics.keepLive+"/"+LiveStreamObject.camera.videonetics.sessionId);
	//: {"userid":"hpe","jsessionid":"4f0247a9e0e0a0d5130da6bf9c741a67","streamsesssionid":1523354069727} 
	var ajaxip= {"userid": LiveStreamObject.connect.login.parent.username, "password":LiveStreamObject.connect.login.parent.password, "jsessionid":LiveStreamObject.camera.sid,"streamsessionid": LiveStreamObject.camera.videonetics.sessionId};
	//var body=JSON.stringify({"url": "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/"+LiveStreamObject.connect.server.stream.project,"body":ajaxip});

	var body=JSON.stringify({"streamsessionid":LiveStreamObject.camera.videonetics.sessionId});

	
	$.ajax({
		method: "POST",
		url:LiveStreamObject.camera.videonetics.keepLive,
		contentType: 'application/json',
		xhrFields: { withCredentials: true },
		data : body,
			success: function(data, textStatus, jqXHR){
		
			console.log("Success",data, textStatus, jqXHR);
			//alert("Sucess--");
		if(data.status == 200  && data.status == 2007)
			{
			console.log(new Date(),": RESULT - LIVE EXTENDED");
			}
		else
			{
			console.log(new Date(),": FAILED - LIVE EXTENDED : ",data.description);
			console.log("PARTNER STATUS CODE : ",data.status);
			 clearInterval(LiveStreamObject.timer.object);
				console.log("CLEARED TIMERRRRRRRR : ",LiveStreamObject.timer.object);
			//startalive_v2p1();
			}
		// IF FAILED  AS PER THE STATUS CODE WE WANT TO CALL STARTLIVE
            },
            error: function(jqXHR, textStatus) {
            	console.log("Error----",jqXHR,textStatus);
            	alert("Error--");
            	//LiveStreamObject.error.log.push(new Date()+" : Error @ KeepLiveRequest ::"+ex.stack);
        		LiveStreamObject.error.log.push([new Date()," : Error @ KeepLiveRequest ::","jqXHR:",jqXHR,"textStatus" ,textStatus,"URL:",LiveStreamObject.camera.videonetics.keepLive, "AAA:","","BBB:", "","CCC", ""]);
        		//console.log("ERORR ON REQUEST:","jqXHR:",jqXHR,"textStatus" ,textStatus,"AAA:", a,"BBB:", b,"CCC", c); 
        		//console.trace("ERORR ON REQUEST:");

            },
            crossDomain: true
        });

}

