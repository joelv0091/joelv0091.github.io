/**
 * 
 */




function start_v1()
{
	
	console.log("PTZ VALUE INPUT"+LiveStreamObject.camera.ptz );
	console.log("comp VALUE INPUT"+LiveStreamObject.camera.company );
	LiveStreamObject.camera.videonetics.startLive =urlcreator(1);
	//LiveStreamObject.camera.videonetics.keepLive =urlcreator(2);

	if(LiveStreamObject.camera.id != null && LiveStreamObject.camera.id != 0 && LiveStreamObject.camera.id != undefined) startalive();
}




/*

function startLiveActions()  // will call After  Start Alive  // Moved to onloader.js
{
	LiveStreamObject.camera.videonetics.keepLive =urlcreatorController(2);
	
	
	
	playerobj=loadplayer();
	LiveStreamObject.camera.player= playerobj;

	 
	 
	if( LiveStreamObject.camera.ptz != undefined  && LiveStreamObject.camera.ptz != null  && LiveStreamObject.camera.ptz ==1)
	{
		//ButtonCreator(loadplayer());
		ButtonCreator();
		 ForPtzCamera();
	}
	intialiseKeepLive();
}

*/