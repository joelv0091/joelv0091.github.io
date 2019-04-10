function stopALl()
{

    oWebControl.JS_RequestInterface({ //StopLivestream
        funcName: "stopAllPreview"
      }).then(function (oData) {
        showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''));
      });
    
}


function distroyAll()
{
	  uninit()

	    // 销毁
	    oWebControl.JS_RequestInterface({
	      funcName: "destroyWnd" // window distroy
	    }).then(function (oData) {
	      showCBInfo(JSON.stringify(oData));
	    });

	    if (bIE) {
	      if (oWebControl != null) {
	        oWebControl.JS_Disconnect().then(function () {
	          console.log("JS_Disconnect");
	        }, function () {});
	      }
	    } else {
	      if (oWebControl != null) {
	        oWebControl.JS_DestroyWnd().then(function () {
	          console.log("JS_DestroyWnd");
	        }, function () {});
	        oWebControl.JS_StopService("window").then(function () {
	          oWebControl.JS_Disconnect().then(function () {
	            console.log("JS_Disconnect");
	          }, function () {});
	        });
	      }
	    }
	    }