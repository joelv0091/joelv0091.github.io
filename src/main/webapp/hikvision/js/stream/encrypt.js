
  function getPubKey(callback) { 
	  console.log('inside getPubKey-----')
	    oWebControl.JS_RequestInterface({  // initialising Request Call 1
	      funcName: "getRSAPubKey",
	      argument: JSON.stringify({
	        keyLength: 1024
	      })
	    }).then(function (oData) {
	      console.log("function getPubKey",oData)
	      if (oData.responseMsg.data) {
	        pubKey = oData.responseMsg.data || 'test';
	        callback()
	      }
	    }).catch(function(error){
	    	 console.error("function error getPubKey",error)
		    })

	 //   playLiveStream();
	  }

  function setEncrypt(value) {
	    var encrypt = new JSEncrypt();
	    console.log('pubKey ',pubKey);
	    encrypt.setPublicKey(pubKey);
	    console.log('pubKey ',value,encrypt.encrypt(value));
	    return encrypt.encrypt(value);
	  }
