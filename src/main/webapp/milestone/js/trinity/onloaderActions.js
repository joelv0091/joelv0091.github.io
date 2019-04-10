
 
 function ptzonloadfunction()
{
	 if(ptzparms != undefined && ptzparms== 1)
	  {
		  
		  document.getElementById("san-cameraController").style.display = "block";


					document.body.onclick= function(e)
					{
					//	let a=e.target.value;
					   e=window.event? event.srcElement: e.target;
										   if(e.className && e.className.indexOf('action')!=-1)
										   {
										   ptzaction(e.getAttribute("value"));//alert(e.getAttribute("value"));
										   videoPush();
											}
					}


	  }	 
}
 
 
 
 function successfunction()
 {
		window.success = function(response) {

			var command = response.querySelector('Command Name').textContent;
			if(fjdi == true)console.log( "Command finished"+command+" successfully ");
		}
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function OnloadFunction() 
 {
	 getConfiguration();
			ptzonloadfunction()
			 
			//getCommunicationType();
			successfunction()	
			//liveMessage();  //after connect
			connect();


}
