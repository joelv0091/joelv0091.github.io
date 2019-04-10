/**
 * 
 */
//( typeof contextMenu_v2p1 == 'function')?


function mainController(p,a,c,d,e,f)
{
	if( LiveStreamObject.connect.server.stream.version == 1 ){a && a(p);}
//	else if( LiveStreamObject.connect.server.stream.version == 1.5 ){b && b(p);}
	else if( LiveStreamObject.connect.server.stream.version == 1.8 ){c && c(p);}
	else if( LiveStreamObject.connect.server.stream.version == 2 ){d && d(p);}
	else if( LiveStreamObject.connect.server.stream.version == 2.1 ){e && e(p);}
	else if( LiveStreamObject.connect.server.stream.version == 2.2 ){e && e(p);}
	else{a && a(p);}
}
function startController()
{
	console.log(LiveStreamObject.connect.server.stream.version);
	 mainController(undefined,start_v1,start_v1p8,start_v2p0,start_v2p1,start_v2p2);	
//	 mainController(undefined,start_v1,start_v1p8,start_v2p0,((typeof start_v2p1 !== 'undefined' && typeof start_v2p1=== 'function'))?start_v2p1:undefined );	

}

function getVideoClip()
{
	//console.log(LiveStreamObject.connect.server.stream.version)
	 mainController(undefined,null,null,null,getVideoClip_v2p1,null);	
//	 mainController(undefined,start_v1,start_v1p8,start_v2p0,((typeof start_v2p1 !== 'undefined' && typeof start_v2p1=== 'function'))?start_v2p1:undefined );	

}

function playbackController()
{
	console.log(LiveStreamObject.connect.server.stream.version);
	 mainController(undefined,null,null,null,startArchive_v2p1,startArchive_v2p2);	
//	 mainController(undefined,start_v1,start_v1p8,start_v2p0,((typeof start_v2p1 !== 'undefined' && typeof start_v2p1=== 'function'))?start_v2p1:undefined );	

}

function ActivateStreamImageontroller()
{
	 mainController(undefined,null,null,null,ActivateStreamImage_v2p1,null);	
//	 mainController(undefined,start_v1,start_v1p8,start_v2p0,((typeof start_v2p1 !== 'undefined' && typeof start_v2p1=== 'function'))?start_v2p1:undefined );	

}

function displayImageController(p)
{
	 mainController(p,null,null,null,displayImage_v2p1,null);	
//	 mainController(undefined,start_v1,start_v1p8,start_v2p0,((typeof start_v2p1 !== 'undefined' && typeof start_v2p1=== 'function'))?start_v2p1:undefined );	

}

function encodedStartAliveActionsController()
{
	
	mainController(undefined,null,null,null,encodedStartalive_v2p1,null);	

}

function startLiveActionsController()
{
	
	
	mainController(undefined,startLiveActions,startLiveActions_v1p8,startLiveActions_v2p0,startLiveActions_v2p1,start_v2p2);	

}

function ptzController(p)
{
	mainController(p,ptzaction,ptzaction_v1p8,ptzaction_v2p0,ptzaction_v2p1,ptzaction_v2p2);	
}

function KeepLiveController()
{
	mainController(undefined,intialiseKeepLive,intialiseKeepLive_v1p8,intialiseKeepLive_v2p0,intialiseKeepLive_v2p1,intialiseKeepLive_v2p2);
}

function urlcreatorController(p)
{
	mainController(p,urlcreator,urlcreator_v1p8,urlcreator_v2p0,urlcreator_v2p1,urlcreator_v2p2);	
}

function contextMenuController(p)
{
	mainController(p,null,null,null,contextMenu_v2p1,contextMenu_v2p2);	
}

function predefinedptzController(p)
{
	if( LiveStreamObject.camera.preset != undefined  && LiveStreamObject.camera.preset != null )
	mainController(p,null,null,null,predefinedptz_v2p1,predefinedptz_v2p2);	
}



