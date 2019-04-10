/**
 * 
 */



 
			function startalive()
			{
				var playerobj={};
			//	$('#loading').Wload({text:' Loading'});
				rewriteScreenContent("Connecting to Video Server......");
			//	if( document.getElementById("loading") )document.getElementById("loading").textContent="Connecting to Video Server......";
					$.ajax({
						method: "GET",
						url:LiveStreamObject.camera.videonetics.startLive

					}).done(function(data, textStatus, ajax) {
						////////////////////////////
						
						
						disableLoadingTab("vid");
			
						
						//////////////////////////////////////
						
						console.log(data.result[0]["hlsURL"]);
						LiveStreamObject.camera.videonetics.sessionId= data.result[0]["sesssionId"];
						LiveStreamObject.camera.videonetics.hlsURL =urlcreator(3)+data.result[0]["hlsURL"];
						console.log(LiveStreamObject.camera.videonetics.hlsURL);
						
						//startLiveActions();
						cameraOnloadFunction();
						
					
					}).fail(function(jqXHR, textStatus, a, b, c) {
					//document.getElementById("vid").innerHTML="newtext";//olderbrowser
					//	if( document.getElementById("loading") )document.getElementById("loading").textContent="ERRROR: Status Code"+textStatus;
						rewriteScreenContent(" Status Code : "+textStatus);
						console.log("ERORR ON REQUEST:",jqXHR, textStatus, a, b, c);
					});

			}



