
var LiveStreamObject = {
	connect : {
		server : {
			parent : {
				directory : {}
			}
		},
		iframe:{
			parent:{
				address:{
				//	ip:"",
					//port:"",
					url:""
				}
			}
		}
	},
	livestream:true
}
LiveStreamObject.connect.server.parent.ip = "192.168.1.186";
LiveStreamObject.connect.server.parent.port = 80;
LiveStreamObject.connect.server.parent.appkey = "20680774";
LiveStreamObject.connect.server.parent.secretKey = "6o1X8WXEzCuVXlYS5ldo";
LiveStreamObject.connect.server.parent.directory.snap = "C:\Users\TMPL-FA-1794\HCWebControlService\Capture";


LiveStreamObject.connect.iframe.parent.address.url = "http://trinityicccdemo-operator.azurewebsites.net/";