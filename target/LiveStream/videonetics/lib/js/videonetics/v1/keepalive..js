/**
 * 
 */


function intialiseKeepLive()
{
	 LiveStreamObject.timer.object= setInterval(function(){
		 KeepLiveRequest();
 }, 60000 * LiveStreamObject.timer.interval);

}

function KeepLiveRequest()
{
	
	LiveStreamObject.camera.videonetics.keepLive =urlcreator(2);
	
	$.ajax({
		method: "GET",
		url:LiveStreamObject.camera.videonetics.keepLive

	}).done(function(data, textStatus, ajax) {
		console.log("LIVE EXTENDED");
		
	}).fail(function(jqXHR, textStatus, a, b, c) {
		//LiveStreamObject.error.log.push(new Date()+" : Error @ KeepLiveRequest ::"+ex.stack);
		LiveStreamObject.error.log.push([new Date()," : Error @ KeepLiveRequest ::","jqXHR:",jqXHR,"textStatus" ,textStatus,"URL:",LiveStreamObject.camera.videonetics.keepLive, "AAA:",a,"BBB:", b,"CCC", c]);
		//console.log("ERORR ON REQUEST:","jqXHR:",jqXHR,"textStatus" ,textStatus,"AAA:", a,"BBB:", b,"CCC", c); 
		//console.trace("ERORR ON REQUEST:");
	});
	
}

