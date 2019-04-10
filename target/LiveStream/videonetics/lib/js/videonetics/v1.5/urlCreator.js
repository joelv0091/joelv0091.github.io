/**
 * 
 */



 function urlcreator_v1p5(situvtn)
 {
 	

// http://<api-server-ip-address>:8075/i-apiserver/REST/local/channel call.  

//http://<api-server-ip-address>:8075/i-apiserver/REST/local/ptz/channel/<channel-id>/13/5 
 	let url= "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/";

 	return (situvtn==1 ) ? url+LiveStreamObject.connect.server.stream.project+"/startlive": (situvtn==2 ) ? url+LiveStreamObject.connect.server.stream.project+"/live/keepalive" : (situvtn==3 ) ? url :   (situvtn==4 ) ? LiveStreamObject.connect.server.stream.project+"/ptz/channel/" :(situvtn==5 ) ? url+LiveStreamObject.connect.server.stream.project+"/user/login": "NULL";
 }