/**
 * 
 */




function start_v2p1()
{
fjdi = true;
	console.log(arguments.callee.name+": PTZ VALUE INPUT"+LiveStreamObject.camera.ptz );
	console.log(arguments.callee.name+": comp VALUE INPUT"+LiveStreamObject.camera.company );
LiveStreamObject.camera.videonetics.loginUrl =urlcreator_v2p1(5);
	LiveStreamObject.camera.videonetics.startLive =urlcreator_v2p1(1);
	//LiveStreamObject.camera.videonetics.keepLive = urlcreator_v2p1(2);
	console.log(arguments.callee.name+": keepLive"+LiveStreamObject.camera.videonetics.keepLive );
//////////////////// TESTING
if(LiveStreamObject.camera.id != null && LiveStreamObject.camera.id != 0 && LiveStreamObject.camera.id != undefined) login_v2p1();
	
//////////////////	
//////	if(LiveStreamObject.camera.id != null && LiveStreamObject.camera.id != 0 && LiveStreamObject.camera.id != undefined) startalive_v2p1();


}

/*
function startLiveActions_v2p1()  // will call After  Start Alive  // Moved to onloader.js
{
	LiveStreamObject.camera.videonetics.keepLive =urlcreator_v2p1(2);
	
	
	
	playerobj=loadplayer();
	LiveStreamObject.camera.player= playerobj;

	 
	 
	if( LiveStreamObject.camera.ptz != undefined  && LiveStreamObject.camera.ptz != null  && LiveStreamObject.camera.ptz ==1)
	{
		//ButtonCreator(loadplayer());
		ButtonCreator();
		 ForPtzCamera();
	}
	intialiseKeepLive_v2p1();
}


*/