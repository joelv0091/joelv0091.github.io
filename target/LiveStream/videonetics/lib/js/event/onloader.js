// All Onload Mananger 

function cameraOnloadFunction() { // will call After  Start Alive    // OTHER NAME: startLiveActions



	
	//LiveStreamObject.camera.videonetics.keepLive =urlcreatorController(2);
	
	playerobj=loadplayer();
	LiveStreamObject.camera.player= playerobj;

	 
	 
	if( LiveStreamObject.camera.ptz != undefined  && LiveStreamObject.camera.ptz != null  && LiveStreamObject.camera.ptz ==1)
	{
		//ButtonCreator(loadplayer());
		ButtonCreator();
		 ForPtzCamera();
	}
	KeepLiveController();



 }


//http://localhost:7878/TrinityLiveStream/videonetics.html?c=4&p=35&t=5271&z=0&s=1
$(document).ready(function() {
	//cameraOnloadFunction();
	let cameraid=findGetParameter("cameraId");
	let c=findGetParameter("c");
	let ptz=findGetParameter("ptz");
	let z=findGetParameter("z");
	let profile = findGetParameter("p");
	let comp= findGetParameter("comp");
	let t= findGetParameter("t");

	
	
	LiveStreamObject.camera.id= (cameraid != undefined && cameraid != null ) ? cameraid:c;
	LiveStreamObject.camera.ptz = (ptz != undefined && ptz != null ) ? ptz:z;
	LiveStreamObject.camera.sid = findGetParameter("sid");
	LiveStreamObject.camera.tanent=(comp != undefined && comp != null ) ? comp:t;
	
	
	defaultUserConfiguration( findGetParameter("user") );
	defaultTypeConfiguration(findGetParameter("type"));  // VMS TYPE IDENTIFICATION
	if(profile != undefined && profile != null)
		{
		LiveStreamObject.connect.profileId= profile;
		getProfileInformation( profile,LiveStreamObject.camera.tanent);
		
		//defaultProfileConfiguration();// VMS DETAILS  IDENTIFICATION 
		//startController();
		}
	else
		{
		defaultComapanyConfiguration(LiveStreamObject.camera.tanent);
		defaultStreamConfiguration();// VMS DETAILS  IDENTIFICATION 
		//defaultVersionConfiguration( findGetParameter("v") );
		startController();
		}// COM  IDENTIFICATION & USING CORRPONDED VMS DETAILS
  // Calling Start Itermediate

});




/*
$(window).unload(
        function(){
            $.ajax({
            url: 'StopstreamApi',
            global: false,
            type: 'POST',
            data: {},
            async: false, //blocks window close
            success: function() {}
        });
    });


*/