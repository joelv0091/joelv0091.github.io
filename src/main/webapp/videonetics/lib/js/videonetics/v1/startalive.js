



 
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
						hlsPlayerActions();ptzActions();
						
					
					}).fail(function(jqXHR, textStatus, errorThrown, b, c) {
					//document.getElementById("vid").innerHTML="newtext";//olderbrowser
					//	if( document.getElementById("loading") )document.getElementById("loading").textContent="ERRROR: Status Code"+textStatus;
						
					    if (jqXHR.status==0) {
					    	rewriteScreenContent("Status Code : "+textStatus+" \n"+'Camera / Server offline!!'/*+' \n Please Check Your Network.'*/);
					    } else if(jqXHR.status==404) {
					        rewriteScreenContent("Status Code : "+textStatus+" \n"+'Requested URL not found.');
					    } else if(jqXHR.status==500) {
					        rewriteScreenContent("Status Code : "+textStatus+" \n"+'Internel Server Error.');
					    } else if(textStatus=='parsererror') {
					        rewriteScreenContent("Status Code : "+textStatus+" \n"+'Error.\nParsing JSON Request failed.');
					    } else if(textStatus=='timeout'){
					        rewriteScreenContent("Status Code : "+textStatus+" \n"+'Request Time out.');
					    } else {
					        rewriteScreenContent("Status Code : "+textStatus+" \n"+'Unknow Error.\n'+jqXHR.responseText);
					    }
						
						
						//rewriteScreenContent("Status Code : "+textStatus);
						console.log(jqXHR.status);
						console.log(textStatus);
						console.log(errorThrown);
						console.log("ERORR ON REQUEST:",jqXHR, textStatus, errorThrown, b, c);
					});

			}



