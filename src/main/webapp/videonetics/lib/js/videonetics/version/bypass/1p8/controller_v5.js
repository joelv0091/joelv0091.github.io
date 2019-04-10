/**
 * 
 */



function mainController(p,a,b,c)
{
	a && a(p);
}
function startController()
{
	 mainController(undefined,start_v1p8);	

}
function startLiveActionsController()
{
	
	mainController(undefined,startLiveActions_v1p8);	
}

function ptzController(p)
{
	mainController(p,ptzaction_v1p8);	
}

function KeepLiveController()
{
	mainController(undefined,intialiseKeepLive_v1p8);
}

function urlcreatorController(p)
{
	mainController(p,urlcreator_v1p8);	
}