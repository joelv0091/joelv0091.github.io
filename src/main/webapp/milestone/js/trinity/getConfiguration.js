var successFun=function(response)
{
	if(response.availablity)
	{
	LiveStreamObject.connect.login.username=response.data.profileDetails.userName;
	LiveStreamObject.connect.login.password=response.data.profileDetails.password;
	//LiveStreamObject.connect.server.parent.ip="192.168.1.74";
	LiveStreamObject.connect.server.parent.ip=response.data.profileDetails.vmsIp;
	LiveStreamObject.connect.server.parent.port=response.data.profileDetails.vmsPort;
	}
}

var FailerFun=function(response)
{
console.log("EROOR");
}




var requestForConfig = function()
{
	
	/*
	var request = new XMLHttpRequest();
	request.open('GET', "/TrinityLiveStream/api/vmsProfile/get/VmsConfigProfile?companyId="+LiveStreamObject.connect.server.parent.c+"&profileId="+LiveStreamObject.connect.server.parent.p, false);  // `false` makes the request synchronous
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//	request.setRequestHeader("dataType", "json");
	request.send(null);

	if (request.status === 200) {
	  console.log(request.responseText);
	  var response=request.responseText;
	  

		if(response.availablity)
			{
			LiveStreamObject.connect.login.username=response.data.profileDetails.userName;
			LiveStreamObject.connect.login.password=response.data.profileDetails.password;
			//LiveStreamObject.connect.server.parent.ip="192.168.1.74";
			LiveStreamObject.connect.server.parent.ip=response.data.profileDetails.vmsIp;
			LiveStreamObject.connect.server.parent.port=response.data.profileDetails.vmsPort;
			}
	}
*/
/*
    $.ajax({
        async: false,
//        type: "POST",
        type: "GET",
        url: "/TrinityLiveStream/api/vmsProfile/get/VmsConfigProfile?companyId="+LiveStreamObject.connect.server.parent.c+"&profileId="+LiveStreamObject.connect.server.parent.p,//2070",
       // data: '{name: "Mudassar" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
			if( document.getElementById("loading") )
				{
				document.getElementById("loading").textContent="Connecting to Video Server......";
				}
			
			
        }
    });
 
    */
}


var getConfiguration = function()
{
	 if( LiveStreamObject.connect.server.parent.p!=undefined &&  LiveStreamObject.connect.server.parent.c!=undefined &&  LiveStreamObject.connect.server.parent.t != undefined) 
	  {
	  cameraAttribute=  LiveStreamObject.connect.server.parent.c;
	 // requestForConfig();
	  getJSONOnRequest( "/TrinityLiveStream/api/vmsProfile/get/VmsConfigProfile?companyId="+LiveStreamObject.connect.server.parent.t+"&profileId="+LiveStreamObject.connect.server.parent.p,successFun,FailerFun,"application/json;charset=UTF-8");
	  }
}


