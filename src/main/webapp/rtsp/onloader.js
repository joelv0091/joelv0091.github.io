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


	 
	 
	if( LiveStreamObject.camera.ptz != undefined  && LiveStreamObject.camera.ptz != null  &&  ( LiveStreamObject.camera.ptz ==1 || LiveStreamObject.camera.ptz =="1") && window.innerHeight > 400 )
	{
		//ButtonCreator(loadplayer());
		contextMenuController();
		enablePtz();
	//	 ForPtzCamera();
	}




 }


//http://localhost:7878/TrinityLiveStream/videonetics.html?c=4&p=35&t=5271&z=0&s=1
//$(document).ready(
		
		
	var documentready=	function() {
	console.log("Loadig Doc Ready");
	let cameraid=findGetParameter("cameraId");
	let c=findGetParameter("c");
	let ptz=findGetParameter("ptz");
	let z=findGetParameter("z");
	let profile = findGetParameter("p");
	let comp= findGetParameter("comp");
	let t= findGetParameter("t");
	let s= decodeURI( findGetParameter("s") ); // Decode the String
	let preset= decodeURI (findGetParameter("preset"));  //encodeURI

	
	
	let r= atob ( findGetParameter("rtsp"));
	
	LiveStreamObject.camera.rtsp= (r != undefined && r != null ) ? r:null;
	LiveStreamObject.camera.id= (cameraid != undefined && cameraid != null ) ? cameraid:c;
	LiveStreamObject.camera.ptz = (ptz != undefined && ptz != null ) ? ptz:z;
	LiveStreamObject.camera.sid = findGetParameter("sid");
	LiveStreamObject.camera.tanent=(comp != undefined && comp != null ) ? comp:t;
	LiveStreamObject.camera.preset=(preset != undefined && preset != null ) ? preset:s;
	
	
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
	//	defaultComapanyConfiguration(LiveStreamObject.camera.tanent);
		defaultStreamConfiguration();// VMS DETAILS  IDENTIFICATION 
		//defaultVersionConfiguration( findGetParameter("v") );

		}// COM  IDENTIFICATION & USING CORRPONDED VMS DETAILS
  // Calling Start Itermediate

}

//);




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