/**
 * 
 * ORGANISER ::::  INITIALISE :: UPDATE DATA 
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

		
}


function defaultStreamConfiguration()
{
	LiveStreamObject.connect.server.stream={};
	LiveStreamObject.connect.server.stream =LiveStreamObject.connect.server.parent[LiveStreamObject.camera.type];

}
function VMSConfiguration_v5(p)
{
	console.log('ip---'+p);
	LiveStreamObject.connect.server.parent[LiveStreamObject.camera.type].ip=p;

}

function defaultStreamConfiguration_v5()
{
    //LiveStreamObject.connect.server.parent=
	LiveStreamObject.connect.server.stream={};
	LiveStreamObject.connect.server.stream =LiveStreamObject.connect.server.parent[LiveStreamObject.camera.type];

}

function defaultTypeConfiguration(input)
{
//	LiveStreamObject.camera.type="vms";
	LiveStreamObject.camera.type=(input == undefined  || input == null)? "vms":(input == "vms" || input == "itms")? input :"vms";
	
	return LiveStreamObject.camera.type;
}

function defaultTypeConfiguration_v5(input)
{
//	LiveStreamObject.camera.type="vms";
	LiveStreamObject.camera.type=(input == undefined  || input == null)? "vms":(input == "vms" || input == "itms")? input :"vms";
	
	
	
	
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
		else
		{
		console.log('NO USER AVAILABLE---- TAKING DEFAULT')
		}
		
}