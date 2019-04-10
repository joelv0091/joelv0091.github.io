

function InitialiseForwardMessenger() {

	// 
	window.addEventListener('message', function(e) {
		console.log(e.data.msg);
		if (e && e.data) {
			switch (e.data.action) {
			case 'changeTitle':
				document.title = e.data.info;
				console.log("parent Listner -> messages ->  ",e.data.info);
				break;
			}
		}
	});

}

function postMessageBroker(iframeElem,childDomain, b, c, d, e) {
	console.log("postMessg-->", iframeElem, b, c, d, e);
	// var iframeElem = document.getElementById(a);
	//console.log("iframeElem-->", iframeElem.contentWindow.location.href);
	/*
	 * PlanE
	var childDomain = ((iframeElem.contentWindow.location) && (typeof iframeElem.contentWindow.location.href == 'string')) ? iframeElem.contentWindow.location.href
			.replace(iframeElem.contentWindow.location.pathname, '/')
			: "";
			*/
	console.log("childDomain-->", childDomain);

	if (iframeElem.contentWindow) {

		iframeElem.contentWindow.postMessage({
			action : b,
			msg : c,
			info : d
		}, childDomain);

	}
}