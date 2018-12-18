document.onkeydown= function(event) {
	event= event || window.event;
	if(event.keyCode === 6 || event.keyCode === 7 || event.keyCode === 32) {
		alert("Board is connected");
	}
}
