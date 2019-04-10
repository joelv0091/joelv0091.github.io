/**
 * 
 */



function mainController(p,a,c,d,e)
{
	if( LiveStreamObject.connect.server.stream.version == 1 ){a && a(p);}
//	else if( LiveStreamObject.connect.server.stream.version == 1.5 ){b && b(p);}
	else if( LiveStreamObject.connect.server.stream.version == 1.8 ){c && c(p);}
	else if( LiveStreamObject.connect.server.stream.version == 2 ){d && d(p);}
	else if( LiveStreamObject.connect.server.stream.version == 2.1 ){e && e(p);}
	else{a && a(p);}
}
function startController()
{
	console.log(LiveStreamObject.connect.server.stream.version);
	 mainController(undefined,start_v1,start_v1p8,start_v2p0,start_v2p1);	
//	 mainController(undefined,start_v1,start_v1p8,start_v2p0,((typeof start_v2p1 !== 'undefined' && typeof start_v2p1=== 'function'))?start_v2p1:undefined );	

}
function startLiveActionsController()
{
	
	mainController(undefined,startLiveActions,startLiveActions_v1p8,startLiveActions_v2p0,startLiveActions_v2p1);	
}

function ptzController(p)
{
	mainController(p,ptzaction,ptzaction_v1p8,ptzaction_v2p0,ptzaction_v2p1);	
}

function KeepLiveController()
{
	mainController(undefined,intialiseKeepLive,intialiseKeepLive_v1p8,intialiseKeepLive_v2p0,intialiseKeepLive_v2p1);
}

function urlcreatorController(p)
{
	mainController(p,urlcreator,urlcreator_v1p8,urlcreator_v2p0,urlcreator_v2p1);	
}