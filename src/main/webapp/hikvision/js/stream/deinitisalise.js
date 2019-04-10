  function uninit() {
	    oWebControl.JS_RequestInterface({
	      funcName: "uninit"  // Deinitialise
	    }).then(function (oData) {
	      showCBInfo(JSON.stringify(oData ? oData.responseMsg : ''));
	    });
	  }