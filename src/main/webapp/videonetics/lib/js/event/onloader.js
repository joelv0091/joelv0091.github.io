// All Onload Mananger 

/*
 	disableLoadingTab("vid");
  enablePtz() 
 
 */



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
	
	console.log("window.location", window.location);
	window.history.replaceState({}, '', window.location.pathname);
	console.log("after window.location", window.location);
	
	
	
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