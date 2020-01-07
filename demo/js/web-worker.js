(function() {
	function postMsg(msg) {
		postMessage(msg);
	}
	
	function listenMsg() {
		onmessage = function (oEvent) {
			console.log(oEvent);
			console.log('has get: ' + oEvent.data);
			postMsg("Hi " + oEvent.data);
		};
	}
	listenMsg();
})();

