/**
 * 
 */



 function urlcreator(situvtn)
 {
 	

// http://<api-server-ip-address>:8075/i-apiserver/REST/local/channel call.  

//http://<api-server-ip-address>:8075/i-apiserver/REST/local/ptz/channel/<channel-id>/13/5 
 	let url= "http://"+LiveStreamObject.connect.server.stream.ip+":"+LiveStreamObject.connect.server.stream.port+"/";

 	return (situvtn==1 ) ?url+ LiveStreamObject.connect.server.stream.project+"/REST/"  +"local/startlive/"+LiveStreamObject.camera.id+"/"+LiveStreamObject.camera.quality.w+"/"+LiveStreamObject.camera.quality.h +"/0" : (situvtn==2 ) ? url+LiveStreamObject.connect.server.stream.project+"/REST/"+  "local/live/keepalive/"+LiveStreamObject.camera.videonetics.sessionId  : (situvtn==3 ) ? url :   (situvtn==4 ) ? url+LiveStreamObject.connect.server.stream.project+"/REST/"+  "local/ptz/channel/" :"NULL";
 }