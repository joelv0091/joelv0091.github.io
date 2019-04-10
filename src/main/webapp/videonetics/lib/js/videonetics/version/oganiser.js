/**
 * 
 * ORGANISER ::::  INITIALISE :: UPDATE DATA 
 * http://localhost:7878/LiveStream/api/vmsProfile/getVmsConfigProfiles?companyId=101
 */


function defaultComapanyConfiguration(companyInput)
{
	if(isNormalInteger(companyInput))LiveStreamObject.camera.company =companyInput;
	var childObj =LiveStreamObject.connect.server.child[LiveStreamObject.camera.company];
	var parrentObj =LiveStreamObject.connect.server.parent;
	if( childObj != undefined && childObj != null  )
		{
		parrentObj={};
		console.log("NNNN",childObj);
		LiveStreamObject.connect.server.parent=LiveStreamObject.connect.server.child[LiveStreamObject.camera.company];
		}
	else
		{
		console.log("=====================================");
		console.log("NO CHILD CONFIGURATION AVAILABLE FOR STREAM, DEFAULT TAKEN");
		console.log("=====================================");
		}

		
}
function getProfileInformation(p,c)
{
	
	
	rewriteScreenContent("Fetching informations......");

		$.ajax({
		  //    async: false,
			type: "GET",
			url:"/TrinityLiveStream/api/vmsProfile/get/VmsConfigProfiles?companyId="+c,
			contentType: "application/json",
	//		xhrFields: { withCredentials: true },
        success: function (response) {
		
			
			
			rewriteScreenContent("Connecting to Video Server....");
			LiveStreamObject.connect.profiles=response.data;
			if(defaultProfileConfiguration(p))// VMS DETAILS  IDENTIFICATION
		{
			var status = ValidateConfigData()
			console.log("defaultProfileConfiguration:::Complted "+status);
			//defaultVersionConfiguration( findGetParameter("v") );
					if(status)startController()
					else
						rewriteScreenContent("Please Check Admin Configuration");
			        }
		
		},
		  error: function(jqXHR, textStatus) {
   
				rewriteScreenContent("Failed to Fetching informations");
				console.log("INTERNAL REST API MAY NOT WORKING");
          }
			,
			crossDomain: true
    });
		
}
/*
function getProfileInformation(p,c)
{
	
	if( document.getElementById("loading") )document.getElementById("loading").textContent="Fetching informations......";

    $.ajax({
        async: false,
//        type: "POST",
        type: "GET",
        url: "/TrinityLiveStream/api/vmsProfile/get/VmsConfigProfiles?companyId="+c,
       // data: '{name: "Mudassar" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
			if( document.getElementById("loading") )
				{
				document.getElementById("loading").textContent="Connecting to Video Server......";
				}
			
			LiveStreamObject.connect.profiles=response.data;
			defaultProfileConfiguration(p);// VMS DETAILS  IDENTIFICATION 
			var status = ValidateConfigData()
			console.log("defaultProfileConfiguration:::Complted "+status);
			//defaultVersionConfiguration( findGetParameter("v") );
			if(status)startController();
        }
    });
		
}*/
function defaultProfileConfiguration(p)
{
	
	//
	var obj= LiveStreamObject.connect.profiles[LiveStreamObject.connect.profileId];
	console.log("obj:::",obj);
	LiveStreamObject.connect.server.stream={};
	if( obj !=undefined && obj !=null  )
	{
	
		
		/*
		if(obj.profileDetails.vmsVersion ==2.0 || obj.profileDetails.vmsVersion =="2.0")
			{
			//obj.profileDetails.vmsVersion =2.1;
			LiveStreamObject.connect.server.stream.serverId=1;
			}
		else{
			LiveStreamObject.connect.server.stream.serverId =2;
		}
		
		*/
		
	   LiveStreamObject.connect.server.stream.ip =obj.profileDetails.vmsIp;
		LiveStreamObject.connect.server.stream.port =obj.profileDetails.vmsPort;
		LiveStreamObject.connect.server.stream.streamType =obj.profileDetails.streamType;
		LiveStreamObject.connect.server.stream.version =obj.profileDetails.vmsVersion;// not recieving	
		LiveStreamObject.connect.server.stream.sslport =obj.profileDetails.vmsSSLPort; // not recieving		
		LiveStreamObject.connect.server.stream.serverId =obj.profileDetails.vmsServerId;// not recieving	
		LiveStreamObject.connect.server.stream.username =obj.profileDetails.userName;
		LiveStreamObject.connect.server.stream.password =obj.profileDetails.password;
		LiveStreamObject.connect.server.stream.project =(obj.profileDetails.vmsProjectName!=undefined &&  obj.profileDetails.vmsProjectName!=null)? obj.profileDetails.vmsProjectName:(obj.profileDetails.vmsVersion==1.8)?"itms-apiserver":(obj.profileDetails.vmsVersion>2)?"REST/":"i-apiserver";
//{"vmsIp":"192.168.10.202","vmsPort":"8085","vmsServerId":1,"vmsVersion":1,}		
//{"vmsIp":"10.10.20.13","vmsPort":"7085","vmsServerId":1,"vmsVersion":2.1,"userName":"itms","password":"itms"}
//{"vmsIp":"192.168.1.173","vmsPort":"7085","vmsSSLPort":"7443","vmsServerId":1,"vmsVersion":2.1,"userName":"joel1","password":"joel1"}

		afterConfigChanges();
	}
	else
		{
	//	alert("No Config");
		rewriteScreenContent("Configuration not available");
		console.log("Configuration not available, For Current Camera or Tanent");
		return false;
		}
console.log("CONFIG:::",LiveStreamObject.connect.server.stream);
	
	return true;

}


function defaultStreamConfiguration()
{
	LiveStreamObject.connect.server.stream={};
	LiveStreamObject.connect.server.stream =LiveStreamObject.connect.server.parent[LiveStreamObject.camera.type];
	afterConfigChanges()

}


function defaultVersionConfiguration(input)
{
//	LiveStreamObject.camera.type="vms";
	LiveStreamObject.connect.server.stream.version =(input == undefined  || input == null)? LiveStreamObject.connect.server.stream.version : input ;
	return LiveStreamObject.connect.server.stream.version;
}



function defaultTypeConfiguration(input)
{
//	LiveStreamObject.camera.type="vms";
	LiveStreamObject.camera.type=(input == undefined  || input == null)? "vms":(input == "vms" || input == "itms" || input == "1" || input == "2")? input :"vms";
	return LiveStreamObject.camera.type;
}




function defaultUserConfiguration(input)
{
	var childObj =LiveStreamObject.connect.login.child[input];
	var parrentObj =LiveStreamObject.connect.login.parent;
	if( childObj != undefined && childObj != null  )
		{
		parrentObj={};
		console.log("USER",childObj);
		LiveStreamObject.connect.login.parent=LiveStreamObject.connect.login.child[input];
		LiveStreamObject.connect.login.parent.username=input;
		}
}










function ValidateConfigData()
{
	
	if(LiveStreamObject.connect.server.stream  && LiveStreamObject.connect.server.stream.version == undefined)return false;
	console.log("ValidateConfigData");
	if(LiveStreamObject.connect.server.stream.version >  1.9 && LiveStreamObject.connect.server.stream.serverId == undefined)return false;	
	console.log("Serverid");
	if(LiveStreamObject.connect.server.stream.version >  1.9  && LiveStreamObject.connect.server.stream.sslport == undefined)return false;
	console.log("sslport");
	if(LiveStreamObject.connect.server.stream.version >  1.9 && LiveStreamObject.connect.server.stream.username == undefined)return false;
	if(LiveStreamObject.connect.server.stream.version > 1.9 && LiveStreamObject.connect.server.stream.password == undefined)return false;
	console.log("password");
	return true;
	
}








function afterConfigChanges()
{

	
	
	defaultVersionConfiguration(findGetParameter("v"))
}
