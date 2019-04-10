


/*$("#playAction").click(function(){
	alert("playAction");
	
});*/

/*function playAction(){
	//alert("playAction");
	//PlayBackVideoAPI.start();
	
	var play = document.getElementById("playActionBtn");
	play.style.display = "none";
	
	var pause = document.getElementById("pauseActionBtn");
	pause.style.display = "block";
	
}*/

/*function pauseAction(){
	//alert("pauseAction");
	//PlayBackVideoAPI.Pause();
	var pause = document.getElementById("pauseActionBtn");
	pause.style.display = "none";
	
	var play = document.getElementById("playActionBtn");
	play.style.display = "block";
		
	
}*/


function playPauseAction(a){
	//alert(a.value);
	var playPause = document.getElementById("playPauseActionBtn");
	var imageTag = document.getElementById("btnImage");
	if(a.value === "pause"){
		playPause.value = "play";
		imageTag.className = "fa fa-play-circle";
		imageTag.style.color = "grey";
		//document.getElementById("stopBtnImage").style.color = "grey";
		PlayBackVideoAPI.Pause();

		
	}else if(a.value === "play"){
		playPause.value = "pause";
		imageTag.className = "fa fa-pause-circle";
		imageTag.style.color = "white";
		
		document.getElementById("stopBtnImage").style.color = "white";
		
		PlayBackVideoAPI.start();
	}
}

function stopAction(){
	//alert("stopAction");
	PlayBackVideoAPI.stop();
	var playPause = document.getElementById("playPauseActionBtn");
	playPause.value = "play";
	var imageTag = document.getElementById("btnImage");
	imageTag.className = "fa fa-play-circle";
	imageTag.style.color = "grey";
	
	document.getElementById("stopBtnImage").style.color = "grey";
}


