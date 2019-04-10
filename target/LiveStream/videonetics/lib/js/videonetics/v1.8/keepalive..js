/**
 * 
 */


function intialiseKeepLive_v1p8()
{
	console.log(new Date(),": intialiseKeepLive_v1p8");

	 LiveStreamObject.timer.object= setInterval(function(){
		 KeepLiveRequest_v1p8();
 }, 60000 * LiveStreamObject.timer.interval);

}

function KeepLiveRequest_v1p8()
{
	LiveStreamObject.camera.videonetics.keepLive = urlcreator_v1p8(2);
	//: {"loginid":"hpe","jsessionid":"4f0247a9e0e0a0d5130da6bf9c741a67","streamsesssionid":1523354069727} 
	var ajaxip= {"loginid": LiveStreamObject.connect.server.stream.username, "pass":LiveStreamObject.connect.server.stream.password, "jsessionid":LiveStreamObject.camera.sid,"streamsessionid": LiveStreamObject.camera.videonetics.sessionId};
	var body=JSON.stringify({"url": "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/"+LiveStreamObject.connect.server.stream.project,"body":ajaxip});
	$.ajax({
		method: "POST",
		url:"/TrinityLiveStream/api/streamController/keepAlive",
		contentType: 'application/json',
		data : body,
		success: function(data, textStatus, jqXHR){
		//{"data":{"status":2007,"code":200,"description":"OK","message":"Successfully Applied!","uri":"http://127.0.0.1:7075/itms-apiserver//live/keepalive","result":[]},"statusCode":200,"status":true}
		if(data.data.code == 200  && data.data.status == 2007)
			{
			console.log(new Date(),": RESULT - LIVE EXTENDED");
			}
		else
			{
			console.log(new Date(),": FAILED - LIVE EXTENDED : ",data.data.description);
			console.log("PARTNER STATUS CODE : ",data.data.status);
			 clearInterval(LiveStreamObject.timer.object);
				console.log("CLEARED TIMERRRRRRRR : ",LiveStreamObject.timer.object);
			//startalive_v1p8();
			}
		// IF FAILED  AS PER THE STATUS CODE WE WANT TO CALL STARTLIVE
            },
            error: function(jqXHR, textStatus) {
            	//LiveStreamObject.error.log.push(new Date()+" : Error @ KeepLiveRequest ::"+ex.stack);
        		LiveStreamObject.error.log.push([new Date()," : Error @ KeepLiveRequest ::","jqXHR:",jqXHR,"textStatus" ,textStatus,"URL:",LiveStreamObject.camera.videonetics.keepLive, "AAA:",a,"BBB:", b,"CCC", c]);
        		//console.log("ERORR ON REQUEST:","jqXHR:",jqXHR,"textStatus" ,textStatus,"AAA:", a,"BBB:", b,"CCC", c); 
        		//console.trace("ERORR ON REQUEST:");

            }
        });

}

