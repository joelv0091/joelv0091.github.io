/**
 * 
 */
	  function showCBInfo(szInfo, type) {
	    if (type === 'error') {
	      szInfo = "<div style='color: red;'>" + dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss") + " " + szInfo + "</div>";
	    } else {
	      szInfo = "<div>" + dateFormat(new Date(), "yyyy-MM-dd hh:mm:ss") + " " + szInfo + "</div>";
	    }
	   // $("#cbInfo").html(szInfo + $("#cbInfo").html());
	  }
	  
	  function cbIntegrationCallBack(oData) {
	    showCBInfo(JSON.stringify(oData.responseMsg));
	  }
	  
	  
	  
	  function validateDataInputs()
	  {


        	console.log('appkey ',LiveStreamObject.connect.server.parent.appkey)
              if (!LiveStreamObject.connect.server.parent.appkey) {
            	  console.log("appkey can not empty！", 'error');
                showCBInfo("appkey can not empty！", 'error');
                return false;
              }
              if (!LiveStreamObject.connect.server.parent.secretKey) {
            	  console.log("secret can not empty！", 'error');
                showCBInfo("secret can not empty！", 'error');
                return false;
              }
              if (!LiveStreamObject.connect.server.parent.ip) {
                  console.log('ip can not empty！ ');
                showCBInfo("ip can not empty！", 'error');
                return false;
              }
              if (!LiveStreamObject.connect.server.parent.port) {
            	  console.log("port can not empty！", 'error');
                showCBInfo("port can not empty！", 'error');
                return false;
              } else if (!/^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/.test(LiveStreamObject.connect.server.parent.port)) {
            	  console.log("Incorrect Port！", 'error');
                showCBInfo("Incorrect Port！", 'error');
                return false;
              }
              return true;
              
	  }
	  
	  