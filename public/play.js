xg = yg = 0;
TrangthaiA= TrangthaiB = 0;
		var socket = io.connect('http://127.0.0.1:3000');

		socket.on("Da-ket-noi",function(data){
			$("#list-device").append(data);
		});
		socket.on("ReadyA",function(){
			var TrangthaiA = 1; 
			$("#TrangthaiA").text("Người chơi A đã sẵn sàng");
		});
		socket.on("ReadyB",function(){
			var TrangthaiB = 1;
			$("#TrangthaiB").text("Người chơi B đã sẵn sàng");
		});
		$(document).ready(function(){
			
			 socket.on("Selected",function(data){
					if (data =="Device01") document.getElementById("Device01").disabled = true;
					if (data =="Device02") document.getElementById("Device02").disabled = true;			 
			 });
			 
			 socket.on("Dang-chonx",function(data){
				 
			 });
			// socket.on("Da-chonx",function(data){
				// if (data =="Device01") document.getElementById("Device02").disabled = true;
				// if (data =="Device02") document.getElementById("Device01").disabled = true;
			// });
			// $("#taoRoom").click(function(){
				// socket.emit("Tao-room", $("#txtRoom").val());
			// });
			$("#chon").click(function(){
			//alert("Xin chao");
			$("#thietbi").hide();
			var device = $("input[name='device']:checked").val();
			//alert(device);
			socket.emit("Xac-thuc-"+device, device);
		});
		});
		
		
		socket.on("Sent-key-from-AAA", function(data){
		var key = parseInt(data);
			switch(key){
				case 1:    //left
				xc = -1; yc =0;
				break;
				case 2:    //up
				xc = 0; yc =1;
				break;
				case 3:    //right
				xc = 1; yc =0;
				break;
				case 4:    //down
				xc = 0; yc =-1;
				break;
				case 5:    //enter
				xc = 0; yc =0;
				$("#choose").text(xg+","+yg);
				$('#A'+xg+yg).css("background-color","blue");
				socket.emit("Toa-do",xg+""+yg);
				break;
				default: return;

			}
			xg+= xc;
			yg+=yc;
		if(xg<0) xg =0; if(xg>7) xg =7;  // limit cursor into grid
		if(yg<0) yg =0; if(yg>7) yg =7;
		var element = $('#A'+xg+yg);
			xt=xg - xc;								//clear prev cursor
			yt=yg - yc;
		$(element).css("background-color","red");
		$('#A'+xt+yt).css("background-color","white");
		$("#display").text(xg+","+yg);

		});		