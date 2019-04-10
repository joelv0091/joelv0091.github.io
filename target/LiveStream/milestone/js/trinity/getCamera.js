
if(fjdi == true)console.log("GET CAMERRA META FROM ID :: FILE    V2");


function getCameraDetails()
{

	  
	  if( cameraAttribute != null)  
		  {
		  
		  LiveStreamObject.camera.Id= getCameraMeta(cameraAttribute);
		  
		  }
	  else if( cameraMetaAttribute != null)
		  {
		  
		  LiveStreamObject.camera.Id= cameraMetaAttribute;
		  }
	  else
		  {
		  // default stream will play       //  POC
		  // LIVE IT SHOULD REMOVE
		  
		  console.log("DEFAULT STREAM");

		  }

}








function getCameraMeta(camNumbr)
{

// SIMPLE APPROACH
	let cam =getAllCameras.cameras[camNumbr-1];
	if(cam != undefined)
		{
		LiveStreamObject.camera.playing=cam;
		return	cam.id;
		}
	else
		{
	//	alert("WRONG URL");
		document.getElementById("livestatus").innerHTML = "No Live Stream Available";
		console.log("ERROR CODE : TRVMSMSCID404");
		}




}



if(fjdi == true)console.log("RECHECK  :: FILE    V1");
  

function findCameraIndex(cameraiduip)
{

// SIMPLE APPROACH
	for(var i = 0; i < getAllCameras.cameras .length; i++)
	{
	  if(getAllCameras.cameras [i].id == cameraiduip)
	  {
			LiveStreamObject.camera.playing=getAllCameras.cameras [i];
	  //  return getAllCameras.cameras [i];
	    return i;
	  }
	}


}



function findCamera(cameraiduip)
{
/*
// SIMPLE APPROACH
	for(var i = 0; i < getAllCameras.cameras .length; i++)
	{
	  if(getAllCameras.cameras [i].id == cameraiduip)
	  {
	   return getAllCameras.cameras [i];
	   // return i;
	  }
	}
*/

/*

///  APRROACH WITH FILTER
return  getAllCameras.cameras.filter(function (chain) {
    return chain.id === cameraiduip;
})[0];//.restaurant.name;


*/

// Comparetivelly BEST APPROACH
return getAllCameras.cameras.find(item => {
	LiveStreamObject.camera.playing=item;
    return item.id === cameraiduip;
})


}
