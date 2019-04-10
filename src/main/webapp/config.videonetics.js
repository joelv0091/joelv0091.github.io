LiveStreamObject.elements.view.enable.imagedownload = false;
LiveStreamObject.elements.view.enable.videodownload = false;

LiveStreamObject.camera.ptzspeed = 6;
LiveStreamObject.camera.timer.interval = 150;// 1500;
LiveStreamObject.camera.timer.xhrTimeOut =false; // Without Request TimeoOut
LiveStreamObject.camera.timer.xhrTimeOut = 150;// 1500;
LiveStreamObject.camera.timer.enable = true; // timer or self

LiveStreamObject.camera.quality.w = 200;
LiveStreamObject.camera.quality.h = 100;

// LiveStreamObject.camera.quality.w =1024;
// LiveStreamObject.camera.quality.h=720;

LiveStreamObject.timer.interval = 2;// in min's
fjdi = true; // debuggerON
var ESBpublicURL = "13.71.118.84:8283";

// http://localhost:7080/TrinityLiveStream/videonetics.html?cameraId=14&type=1&ptz=1

// http://localhost:7080/TrinityLiveStream/rtsp/?cameraId=14&type=1&ptz=1&rtsp=cnRzcDovLzE3Mi4yMC4xLjM2OjcwNzAvb252aWYmZXZlbnQmdmlkZW8x
// btoa("rtsp://admin:123456@172.20.1.36:7070/onvif&event&video1") // run in
// console so we will get base64 data. replace in RTSP url

// LiveStreamObject.camera.error.log // will give all error list

// Unified with browser cache sesion 2.1
// Unifed with Server Call 2.2
LiveStreamObject.connect.server.parent['1'].ip = "192.168.1.173";
LiveStreamObject.connect.server.parent['1'].port = 7080; // 7443 hardcoded
															// for SSL
LiveStreamObject.connect.server.parent['1'].streamType = "mjpeg";
LiveStreamObject.connect.server.parent['1'].sslport = 7443;
LiveStreamObject.connect.server.parent['1'].version = 2.1;
LiveStreamObject.connect.server.parent['1'].serverId = 5;
LiveStreamObject.connect.server.parent['1'].project = "REST/";
LiveStreamObject.connect.server.parent['1'].username = "joel2";
LiveStreamObject.connect.server.parent['1'].password = "joel2";

LiveStreamObject.connect.server.parent['2'].ip = "vapiserver.videonetics.com";
LiveStreamObject.connect.server.parent['2'].port = 7080;
LiveStreamObject.connect.server.parent['2'].streamType = "mjpeg";
LiveStreamObject.connect.server.parent['2'].sslport = 7443;
LiveStreamObject.connect.server.parent['2'].version = 2.2;
LiveStreamObject.connect.server.parent['2'].serverId = 1;
LiveStreamObject.connect.server.parent['2'].project = "REST/";
LiveStreamObject.connect.server.parent['2'].username = "joel";
LiveStreamObject.connect.server.parent['2'].password = "joel";

LiveStreamObject.connect.server.parent['3'] = {};
LiveStreamObject.connect.server.parent['3'].ip = "vapiserver.videonetics.com";
LiveStreamObject.connect.server.parent['3'].port = 7080;
LiveStreamObject.connect.server.parent['3'].streamType = "mjpeg";
LiveStreamObject.connect.server.parent['3'].sslport = 7443;
LiveStreamObject.connect.server.parent['3'].version = 2.2;
LiveStreamObject.connect.server.parent['3'].serverId = 1;
LiveStreamObject.connect.server.parent['3'].project = "REST/";
LiveStreamObject.connect.server.parent['3'].username = "joel";
LiveStreamObject.connect.server.parent['3'].password = "joel";
/*
 * 
 * 
 * LiveStreamObject.connect.server.parent['1'].ip ="apiservice.videonetics.com";
 * LiveStreamObject.connect.server.parent['1'].port =7080; // 7443 hardcoded for
 * SSL LiveStreamObject.connect.server.parent['1'].sslport =7443;
 * LiveStreamObject.connect.server.parent['1'].version =2;
 * LiveStreamObject.connect.server.parent['1'].project ="REST/";
 * 
 * 
 * LiveStreamObject.connect.server.parent['2'].ip ="apiservice.videonetics.com";
 * LiveStreamObject.connect.server.parent['2'].port =7080;
 * LiveStreamObject.connect.server.parent['2'].sslport =7443;
 * LiveStreamObject.connect.server.parent['2'].version =2;
 * LiveStreamObject.connect.server.parent['2'].project ="REST/";
 */

LiveStreamObject.connect.login.parent.username = "joel";
LiveStreamObject.connect.login.parent.password = "joel";

LiveStreamObject.connect.login.child['admin'] = {};
LiveStreamObject.connect.login.child['admin'].password = "admin";

LiveStreamObject.connect.login.child['trinity'] = {};
LiveStreamObject.connect.login.child['trinity'].password = "trinity";

LiveStreamObject.connect.server.child['9999'] = {};
LiveStreamObject.connect.server.child['9999']['1'] = {};
LiveStreamObject.connect.server.child['9999']['1'].ip = "apiservice.videonetics.com";
LiveStreamObject.connect.server.child['9999']['1'].port = 7080;
LiveStreamObject.connect.server.child['9999']['1'].sslport = 7443;
LiveStreamObject.connect.server.child['9999']['1'].version = 2.1;
LiveStreamObject.connect.server.child['9999']['1'].serverId = 1;
LiveStreamObject.connect.server.child['9999']['1'].project = "REST/";
LiveStreamObject.connect.server.child['9999']['1'].username = "joel";
LiveStreamObject.connect.server.child['9999']['1'].password = "joel";

LiveStreamObject.connect.server.child['5271'] = {};
LiveStreamObject.connect.server.child['5271'].vms = {};
LiveStreamObject.connect.server.child['5271'].vms.ip = "192.168.1.212";
LiveStreamObject.connect.server.child['5271'].vms.port = 8085;
LiveStreamObject.connect.server.child['5271'].vms.version = 1;
LiveStreamObject.connect.server.child['5271'].vms.project = "i-apiserver";

LiveStreamObject.connect.server.child['6277'] = {};
LiveStreamObject.connect.server.child['6277'].itms = {};
LiveStreamObject.connect.server.child['6277'].itms.ip = "10.10.50.216";
LiveStreamObject.connect.server.child['6277'].itms.port = 7085;
LiveStreamObject.connect.server.child['6277'].itms.version = 1.8;
LiveStreamObject.connect.server.child['6277'].itms.project = "itms-apiserver";

LiveStreamObject.connect.server.child['6278'] = {};
LiveStreamObject.connect.server.child['6278'].vms = {};
LiveStreamObject.connect.server.child['6278'].vms.ip = "192.168.0.14";
LiveStreamObject.connect.server.child['6278'].vms.port = 8085;
LiveStreamObject.connect.server.child['6278'].vms.version = 1;
LiveStreamObject.connect.server.child['6278'].vms.project = "i-apiserver";

LiveStreamObject.connect.server.child['6279'] = {};
LiveStreamObject.connect.server.child['6279'].vms = {};
LiveStreamObject.connect.server.child['6279'].vms.ip = "192.168.1.26";
LiveStreamObject.connect.server.child['6279'].vms.port = 8085;
LiveStreamObject.connect.server.child['6279'].vms.version = 1;
LiveStreamObject.connect.server.child['6279'].vms.project = "i-apiserver";
