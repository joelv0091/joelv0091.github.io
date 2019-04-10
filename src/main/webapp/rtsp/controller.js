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
	else if( LiveStreamObject.connect.server.stream.version == 2.2 ){f && f(p);}
	else{a && a(p);}
}
function startController()
{
	console.log(LiveStreamObject.connect.server.stream.version);
	 mainController(undefined,null,null,null,null,start_v2p2);	
//	 mainController(undefined,start_v1,start_v1p8,start_v2p0,((typeof start_v2p1 !== 'undefined' && typeof start_v2p1=== 'function'))?start_v2p1:undefined );	

}
function startLiveActionsController()
{
	
	mainController(undefined,null,null,null,null,start_v2p2);	
}

function ptzController(p)
{
	mainController(p,null,null,null,null,ptzaction_v2p2);	
}

function KeepLiveController()
{
	mainController(undefined,null,null,null,null,intialiseKeepLive_v2p2);
}

function urlcreatorController(p)
{
	mainController(p,null,null,null,null,urlcreator_v2p2);	
}

function contextMenuController(p)
{
	mainController(p,null,null,null,null,contextMenu_v2p2);	
}

function predefinedptzController(p)
{
	if( LiveStreamObject.camera.preset != undefined  && LiveStreamObject.camera.preset != null )
	mainController(p,null,null,null,null,predefinedptz_v2p2);	
}



