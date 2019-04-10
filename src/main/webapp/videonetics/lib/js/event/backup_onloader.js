// All Onload Mananger 

/*
 	disableLoadingTab("vid");
  enablePtz() 
 
 */

function enablePtz()
{
	var myClasses = document.querySelectorAll('.container > .player-buttons'),
    i = 0,
    l = myClasses.length;

for (i; i < l; i++) {
    myClasses[i].style.display = 'block';
}
}


function cameraOnloadFunction() { // will call After  Start Alive    // OTHER NAME: startLiveActions



	
	//LiveStreamObject.camera.videonetics.keepLive =urlcreatorController(2);
	
	playerobj=loadplayer();
	
	LiveStreamObject.camera.player= playerobj;
	
	
	 
	 
	if( LiveStreamObject.camera.ptz != undefined  && LiveStreamObject.camera.ptz != null  && LiveStreamObject.camera.ptz ==1  && window.innerHeight > 400 )
	{
		//ButtonCreator(loadplayer());
		contextMenuController();
	//	ButtonCreator();
		enablePtz();
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

	
	let starttimestamp= findGetParameter("start");
	
	
	let y= decodeURI( findGetParameter("y") ); // Decode the String
	let preset= decodeURI (findGetParameter("preset"));  //encodeURI

	
	LiveStreamObject.connect.server.stream.serverId =  (cameraid != undefined && cameraid != null ) ? cameraid:c;
	LiveStreamObject.camera.id= (cameraid != undefined && cameraid != null ) ? cameraid:c;
	LiveStreamObject.camera.ptz = (ptz != undefined && ptz != null ) ? ptz:z;
	LiveStreamObject.camera.sid = findGetParameter("sid");
	LiveStreamObject.camera.tanent=(comp != undefined && comp != null ) ? comp:t;
	LiveStreamObject.camera.preset=(preset != undefined && preset != null ) ? preset:y;
	
	
	
	
	LiveStreamObject.camera.starttimestamp=starttimestamp;
	
	defaultUserConfiguration( findGetParameter("user") );
	defaultTypeConfiguration(findGetParameter("type"));  // VMS TYPE IDENTIFICATION
	if(profile != undefined && profile != null)
		{
		LiveStreamObject.connect.profileId= profile;
		getProfileInformation( profile,LiveStreamObject.camera.tanent);
		
		}
	else if(starttimestamp != undefined && starttimestamp != null)
		{
		defaultComapanyConfiguration(LiveStreamObject.camera.tanent);
		defaultStreamConfiguration();// VMS DETAILS  IDENTIFICATION 
		//defaultVersionConfiguration( findGetParameter("v") );
		playbackController();
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