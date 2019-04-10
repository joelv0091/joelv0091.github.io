/**
 * 
 */


function intialiseKeepLive_v1p5()
{
	 LiveStreamObject.timer.object= setInterval(function(){
		 KeepLiveRequest_v1p5();
 }, 60000 * LiveStreamObject.timer.interval);

}

function KeepLiveRequest_v1p5()
{
	LiveStreamObject.camera.videonetics.keepLive = urlcreator_v1p5(2);
	//: {"loginid":"hpe","jsessionid":"4f0247a9e0e0a0d5130da6bf9c741a67","streamsesssionid":1523354069727} 
	var ajaxip= JSON.stringify({"loginid": LiveStreamObject.connect.login.parent.username, "jsessionid":LiveStreamObject.camera.sid,"streamsesssionid": LiveStreamObject.camera.videonetics.sessionId});
	//console.log(ajaxip,"REQUEST - LIVE EXTENDED"+LiveStreamObject.camera.videonetics.keepLive);
	$.ajax({
		method: "POST",
		url:LiveStreamObject.camera.videonetics.keepLive,
		contentType: 'application/json',
		data : ajaxip,
		success: function(data, textStatus, jqXHR){
		
		if(data.code == 200  && data.status == 2007)
			{
			console.log(new Date(),": RESULT - LIVE EXTENDED");
			}
		else
			{
			console.log(new Date(),": FAILED - LIVE EXTENDED : ",data.description);
			console.log("PARTNER STATUS CODE : ",data.status);
			startalive_v1p5();
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
/*	$.ajax({
		method: "GET",
		url:LiveStreamObject.camera.videonetics.keepLive

	}).done(function(data, textStatus, ajax) {
		console.log("LIVE EXTENDED");
		
	}).fail(function(jqXHR, textStatus, a, b, c) {
		//LiveStreamObject.error.log.push(new Date()+" : Error @ KeepLiveRequest ::"+ex.stack);
		LiveStreamObject.error.log.push([new Date()," : Error @ KeepLiveRequest ::","jqXHR:",jqXHR,"textStatus" ,textStatus,"URL:",LiveStreamObject.camera.videonetics.keepLive, "AAA:",a,"BBB:", b,"CCC", c]);
		//console.log("ERORR ON REQUEST:","jqXHR:",jqXHR,"textStatus" ,textStatus,"AAA:", a,"BBB:", b,"CCC", c); 
		//console.trace("ERORR ON REQUEST:");
	});*/
	
}

