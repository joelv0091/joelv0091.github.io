
  

function findCameraIndex(cameraiduip)
{

// SIMPLE APPROACH
	for(var i = 0; i < getAllCameras.cameras .length; i++)
	{
	  if(getAllCameras.cameras [i].id == cameraiduip)
	  {
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
    return item.id === cameraiduip;
})


}
