var stompClient = null;

	function setConnected(connected) {
	    $("#connect").prop("disabled", connected);
	    $("#disconnect").prop("disabled", !connected);
	    if (connected) {
	        $("#conversation").show();
	    }
	    else {
	        $("#conversation").hide();
	    }
	    $("#greetings").html("");
	}

	function connect() {
	    var socket = new SockJS('/gs-guide-websocket');
	    stompClient = Stomp.over(socket);
	    stompClient.connect({}, function (frame) {
			// old put here
			setConnected(true);
			console.log('Connected: ' + frame);
			if(roomNo== 'room1') {
				stompClient.subscribe('/topic/greetings1', function (greeting) {
					showInfo(JSON.parse(greeting.body).location, JSON.parse(greeting.body).color);
					console.log(JSON.parse(greeting.body).turn);
					if(JSON.parse(greeting.body).turn==true) {
						turn= false;
					}
					else {
						turn= true;
					}
				});
			}
			if(roomNo== 'room2') {
				stompClient.subscribe('/topic/greetings2', function (greeting) {
					showInfo(JSON.parse(greeting.body).location, JSON.parse(greeting.body).color);
					console.log(JSON.parse(greeting.body).turn);
					if(JSON.parse(greeting.body).turn==true) {
						turn= false;
					}
					else {
						turn= true;
					}
				});
			}
			if(roomNo== 'room3') {
				stompClient.subscribe('/topic/greetings3', function (greeting) {
					showInfo(JSON.parse(greeting.body).location, JSON.parse(greeting.body).color);
					console.log(JSON.parse(greeting.body).turn);
					if(JSON.parse(greeting.body).turn==true) {
						turn= false;
					}
					else {
						turn= true;
					}
				});
			}
	    });
	}

	function disconnect() {
	    if (stompClient !== null) {
	        stompClient.disconnect();
	    }
	    setConnected(false);
	    console.log("Disconnected");
	}
	
	function sendInfo(location, color) {
		if(roomNo=== 'room1')
			stompClient.send("/app/room1", {}, JSON.stringify({'location': location, 'color':color, 'turn':turn}));
		if(roomNo=== 'room2')
			stompClient.send("/app/room2", {}, JSON.stringify({'location': location, 'color':color, 'turn':turn}));
		if(roomNo=== 'room3')
			stompClient.send("/app/room3", {}, JSON.stringify({'location': location, 'color':color, 'turn':turn}));
	}
	function sendRecentCon(cnt) {
		stompClient.send("/app/hello", {}, JSON.stringify({'num': cnt}));
	}
	
	function showInfo(location, color) {
		$("#"+ location).css('background-color',color);
	}

	$(function () {
		roomNo= document.getElementById("whichroom").innerHTML;
	    $("form").on('submit', function (e) {
	        e.preventDefault();
	    });
	    $( "#connect" ).click(function() {
			connect();
			count++;
			sendRecentCon(count);
		});
	    $( "#disconnect" ).click(function() {
			disconnect();
			count--;
			sendRecentCon(count);
		});
	});