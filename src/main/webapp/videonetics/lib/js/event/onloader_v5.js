// All Onload Mananger 

function cameraOnloadFunction() { // will call After  Start Alive    // OTHER NAME: startLiveActions



	
	//LiveStreamObject.camera.videonetics.keepLive =urlcreatorController(2);
	
	playerobj=loadplayer();
	LiveStreamObject.camera.player= playerobj;

	 
	 
	if( LiveStreamObject.camera.ptz != undefined  && LiveStreamObject.camera.ptz != null  && LiveStreamObject.camera.ptz ==1)
	{
		//ButtonCreator(loadplayer());
		//ButtonCreator();
		  document.getElementById("san-cameraController").style.display = "block";
		 ForPtzCamera();
	}
	KeepLiveController();



 }



$(document).ready(function() {
	//cameraOnloadFunction();
	LiveStreamObject.camera.id= findGetParameter("cameraId");
	LiveStreamObject.camera.ptz = findGetParameter("ptz");
	LiveStreamObject.camera.sid = findGetParameter("sid");

	defaultTypeConfiguration_v5(findGetParameter("type"));
		VMSConfiguration_v5( findGetParameter("ip"));
	
//	defaultTypeConfiguration(findGetParameter("type"));  // VMS TYPE IDENTIFICATION
	//defaultComapanyConfiguration(findGetParameter("comp"));// COM  IDENTIFICATION & USING CORRPONDED VMS DETAILS
	//defaultStreamConfiguration();// VMS DETAILS  IDENTIFICATION 
	//defaultProfileConfiguration_v5(findGetParameter("prof"));
	defaultStreamConfiguration_v5();
	startController();  // Calling Start Itermediate

});