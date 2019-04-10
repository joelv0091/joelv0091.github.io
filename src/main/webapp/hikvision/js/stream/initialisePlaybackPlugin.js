function initializePlaybackPlugin() {
          	  console.log('inside getPubKey initializePlaybackPlugin');

             //   var appkey = "20680774";
                //appkey = setEncrypt(appkey)
                var secret = setEncrypt(LiveStreamObject.connect.server.parent.secretKey);
          	  var encryptedFields = ["secret"];
               // encryptedFields.push(secret);
              //  var ip = "192.168.1.186";
                //ip = setEncrypt(ip)
             //   var port = Number.parseInt('80');
                
           //     var snapDir = "C:\Users\TMPL-FA-1794\HCWebControlService\Capture"
              	//  snapDir = setEncrypt(snapDir)
                var layout = "1x1";
                //layout = setEncrypt(layout)
              
                console.log('encryptedFields ',encryptedFields);
           








                if( validateDataInputs() ==false)return;
                
          var paramDetails= JSON.stringify({
              appkey: LiveStreamObject.connect.server.parent.appkey,
              secret: false,
              ip: LiveStreamObject.connect.server.parent.ip,
              playMode: 1, 
              port: LiveStreamObject.connect.server.parent.port,
              snapDir: LiveStreamObject.connect.server.parent.directory.snap,
              layout: layout,
              encryptedFields: "secreat"
            });
          console.log('parameter details ',paramDetails)
                oWebControl.JS_RequestInterface({ // initialising Request Call 2
                  funcName: "init",
                  argument:paramDetails
                }).then(function (oData) {
                //  showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''));
                  console.log("Initialization JS_RequestInterface -> init -> Success---",oData);
                //  alert()
                }).catch(function(error){
              	  console.log("Initialization  JS_RequestInterface -> init -> Error---",error);
              	  alert()
                    });

                 console.log('Outside getPubKey of JS_CreateWnd');



}



